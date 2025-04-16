import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

const EntryList = ({ entries }) => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        aria-controls="fr-entry-list"
        id="fr-entry-header"
        className={`fr-heading ${open ? "open" : ""}`}
        onClick={toggleOpen}
      >
        <div className="header-control">
          <Typography component="h2" variant="h5">
            Entries
          </Typography>
          <ExpandMore className="expand-icon" />
        </div>
        <Divider className="divider" />
      </div>
      <div id="fr-entry-list" className={`${open ? "open" : ""}`}>
        <Grid container spacing={2}>
          {entries.map((entry, index) => (
            <Grid key={`entry-grid-${index}`} size={{ xs: 4 }}>
              <Card>
                <CardActionArea
                  href={`https://anilist.co/anime/${entry.id}`}
                  target="_blank"
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: 103, width: 69, objectFit: "cover" }}
                    image={entry.image}
                  />
                  <CardContent sx={{ lineHeight: 1 }}>
                    <Typography component="span" variant="subtitle2">
                      {entry.name}
                    </Typography>
                    <Divider />
                    <Box
                      display="flex"
                      flexDirection="column"
                      sx={{ marginTop: "0.5em" }}
                    >
                      <Typography component="span" variant="caption">
                        {entry.type} - {entry.length} Episode
                        {entry.length > 1 ? "s" : ""}
                      </Typography>

                      <Typography component="span" variant="caption">
                        {new Date(entry.startDate).getFullYear()}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default EntryList;

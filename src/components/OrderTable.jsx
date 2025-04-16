import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const OrderTable = ({ name, tableEntries, notes, entryRef }) => {
  const hasTableNotes = () => {
    let flag = false;
    tableEntries.forEach((entry) => {
      if ("note" in entry) {
        flag = true;
      }
    });
    console.log(flag);
    return flag;
  };
  return (
    <div className="fr-order-table-container">
      {name && (
        <Typography component="h4" variant="overline">
          {name}
        </Typography>
      )}
      <TableContainer component={Paper} className="fr-order-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 50 }}>#</TableCell>
              <TableCell sx={{ width: hasTableNotes() ? "30%" : "60%" }}>
                Title
              </TableCell>
              <TableCell>Type</TableCell>
              <TableCell align="right">Episodes</TableCell>
              <TableCell align="right">Start Date</TableCell>
              {hasTableNotes() && (
                <TableCell sx={{ width: "30%" }}>Notes</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableEntries.map((orderItem) => {
              const anime = entryRef.find((x) => x.id === orderItem.id);
              return (
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    textDecoration: "none",
                  }}
                  hover
                  component={Link}
                  href={`https://anilist.co/anime/${anime.id}`}
                  target="_blank"
                  className={`fr-order-item ${orderItem.main && "main"}`}
                >
                  <TableCell
                    sx={{
                      width: 50,
                      padding: "4px 16px 4px 4px",
                      lineHeight: 0,
                    }}
                  >
                    <img src={anime.image} width={50} />
                  </TableCell>
                  <TableCell>{anime.name}</TableCell>
                  <TableCell>{anime.type}</TableCell>
                  <TableCell align="right">{orderItem.episodes}</TableCell>
                  <TableCell align="right">
                    {new Date(anime.startDate).toLocaleDateString()}
                  </TableCell>
                  {orderItem.note && <TableCell>{orderItem.note}</TableCell>}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {notes && notes.length > 0 && (
        <div className="fr-order-notes">
          {notes.map((note, index) => (
            <Typography
              component="span"
              variant="subtitle2"
              className="fr-order-note"
            >
              Note {index + 1}: {note}
            </Typography>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderTable;

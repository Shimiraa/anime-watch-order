import { Divider, Typography } from "@mui/material";
import EntryList from "./EntryList";
import OrderList from "./OrderList";

const FranchisePage = ({ franchise }) => {
  return (
    <div className="fr-page">
      <Typography component="h1" variant="h3" className="fr-name">
        {franchise.name}
      </Typography>
      <Divider sx={{ margin: "0.5em 0 1.5em 0" }} />

      <div className="fr-intro">
        {franchise.introduction.map((text, index) => (
          <p key={`fr-intro-${index}`}>{text}</p>
        ))}
      </div>

      <EntryList entries={franchise.entries} />
      <OrderList entries={franchise.entries} order={franchise.orderInfo} />
    </div>
  );
};

export default FranchisePage;

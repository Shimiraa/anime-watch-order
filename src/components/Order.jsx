import { Typography } from "@mui/material";
import OrderTable from "./OrderTable";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";

const Order = ({ order, entries }) => {
  return (
    <div className="fr-order" id={order.name.toLowerCase().replace(" ", "-")}>
      <Typography component="h3" variant="h6" className="fr-order-header">
        {order.name}
        <a href="#fr-order-header" className="fr-to-top">
          <KeyboardDoubleArrowUp />
        </a>
      </Typography>
      {order.tables.map((table) => (
        <OrderTable
          name={table.name}
          tableEntries={table.entries}
          notes={table.notes}
          entryRef={entries}
        />
      ))}
    </div>
  );
};

export default Order;

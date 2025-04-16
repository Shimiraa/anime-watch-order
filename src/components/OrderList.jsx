import { Divider, Typography } from "@mui/material";
import Order from "./Order";

const OrderList = ({ entries, order }) => {
  const filterEntries = (orderObj) => {
    const filtered = [];
    orderObj.tables.forEach((table) => {
      filtered.push(
        ...table.entries.map((orderEntry) => {
          return { ...entries.find((x) => x.id === orderEntry.id) };
        })
      );
    });
    return filtered;
  };

  return (
    <>
      <div id="fr-order-header" className="fr-heading">
        <div>
          <Typography component="h2" variant="h5">
            Order{order.orders.length > 1 && "s"}
          </Typography>
        </div>
        <Divider sx={{ margin: "0.5em 0 1.5em 0" }} />
      </div>
      <div id="fr-intro">
        {order.orders.length > 1 && (
          <ul className="fr-order-nav">
            {order.orders.map((order, index) => (
              <li key={`fr-order-nav-${index}`}>
                <a href={`#${order.name.toLowerCase().replace(" ", "-")}`}>
                  {order.name}
                </a>
              </li>
            ))}
          </ul>
        )}
        {order.introduction.map((text, index) => (
          <p key={`fr-order-intro-${index}`}>{text}</p>
        ))}
      </div>
      <div className="fr-orders">
        {order.orders.map((order, index) => (
          <Order
            key={`fr-order-${index}`}
            order={order}
            entries={filterEntries(order)}
          />
        ))}
      </div>
    </>
  );
};

export default OrderList;

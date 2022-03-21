import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Cart = (props) => {
  return (
    <div>
      <h2>Your cart</h2>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          border: "1px solid lightgray",
          mt: 2,
        }}
      >
        <ListItem>
          <ListItemText
            primary={props.service.name}
            secondary={props.service.url}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>{props.tier.name}</div>
                <div>${props.tier.price}</div>
              </div>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Cart;

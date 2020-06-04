import React from "react";
import { Typography, InputBase } from "@material-ui/core";

import Context from "./Context";

export default function Tittle({ title, listId }) {
  const [open, setOpen] = React.useState();

  const [newTitle, setNewTitle] = React.useState(title);
  const { updateNewListTitle } = React.useContext(Context);
  const handleChange = (e) => {
    updateNewListTitle(newTitle, listId);
    setNewTitle(e.target.value);
  };

  return (
    <div>
      {open ? (
        <div style={{ paddingLeft: 10 }}>
          <InputBase
            value={newTitle}
            onChange={handleChange}
            autoFocus
            fullWidth
            onBlur={() => setOpen(false)}
          />
        </div>
      ) : (
        <div style={{ paddingLeft: 10, paddingTop: 10 }}>
          <Typography
            style={{ fontWeight: "bold", fontSize: "20px" }}
            onClick={() => setOpen(!open)}
          >
            {title}
          </Typography>
        </div>
      )}
    </div>
  );
}

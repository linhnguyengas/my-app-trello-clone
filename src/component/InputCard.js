import React from "react";
import { Paper, InputBase, Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import Context from "./Context";
export default function InputCard({ setOpen, listId, type }) {
  const { addMoreCard, addMoreList } = React.useContext(Context);

  const [title, setTitle] = React.useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleButtonConfirm = () => {
      if (title === "") {
          return
      }else if (type === "card") {
      addMoreCard(title, listId);
      setTitle("");
      setOpen(false);
    } else {
      addMoreList(title);
      setTitle("");
      setOpen(false);
    }
    
  };

  return (
    <div>
      <div>
        <Paper style={{ height: "100%", padding: "10px 20px 30px 0" }}>
          <InputBase
            onChange={handleChange}
            multiline
            fullWidth
            placeholder={
              type === "card"
                ? "Enter a title of this card.."
                : "Enter list title.."
            }
            value={title}
          />
        </Paper>
      </div>
      <div>
        <Button
          style={{ backgroundColor: "#5AAC44" }}
          onClick={handleButtonConfirm}
        >
          {type === "card" ? "Add Card" : "Add List "}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}

import React from "react";
import { Paper, Typography, fade, Collapse } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputCard from "./InputCard";
const useStyle = makeStyles(() => ({
  addCard: {
    backgroundColor: "#EBECF0",
    "&:hover": {
      backgroundColor: fade("#000", 0.25),
    },
  },
}));

export default function InputContainer({listId, type}) {
  const classes = useStyle();
  const [open, setOpen] = React.useState()
  return (
    <div style={{ margin: 10 }}>
      <Collapse in ={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type}/>
      </Collapse>
      <Collapse in ={!open}>
        <Paper
          className={classes.addCard}
          style={{ paddingTop: 20, paddingBottom: 10 }}
          onClick={()=> setOpen(!open)}
        >
          <Typography>{type === 'card' ?' + Add a card' : '+ Add another list'}</Typography>
        </Paper>
      </Collapse>
    </div>
  );
}

import React from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Tittle from "./Tittle";
import Card from "./Card";
import InputContainer from "./InputContainer";
import { Droppable,Draggable } from "react-beautiful-dnd";

const useStyle = makeStyles(() => ({
  root: {
    width: "300px",
    minHeight: "auto",
    overflowY: "auto",
    backgroundColor: "#EBECF0",
    marginLeft: 20,
  },
}));

export default function List({ list, index }) {
  const classes = useStyle();
  return (
    <Draggable draggableId={list.id} index={index}>
    {
      (provided) => (
        <div  {...provided.draggableProps} ref={provided.innerRef}>
     
        <Paper className={classes.root} {...provided.dragHandleProps}>
          <CssBaseline />
          <Tittle title={list.title} listId={list.id} />
          <Droppable droppableId={list.id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.cards.map((card, index) => (
                  <Card key={card.id} card={card} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <InputContainer listId={list.id} type="card" />
        </Paper>
      </div>
      )
    }
  </Draggable>
   
  );
}

import React from "react";
import { Paper, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Draggable } from "react-beautiful-dnd";
//import Context from "./Context";
const useStyle = makeStyles(() => ({
  card: {
    margin: 10,
  },
}));
export default function Card({ card, index,listId }) {
  const classes = useStyle();
  const [openEdit, setEdit] = React.useState();
  const [newCard, setNewCard] = React.useState(card.title);
   // const {updateNewCard} = React.useContext(Context)
  const handleChange = (e) =>{
    //updateNewCard(newCard, listId)
    setNewCard(e.target.value);
  }
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          className={classes.card}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div>
            {openEdit ? (
              <div>
                  <InputBase
                    style={{textAlign: 'center', width: '100%'}}
                    value={newCard}
                    onChange={handleChange}
                    autoFocus
                    onBlur={() => setEdit(false)}
                  />
              </div>
            ) : (
              <div>
                {" "}
                <Paper onClick={() => setEdit(!openEdit)} style={{ padding: 10 }}>{card.title}</Paper>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}

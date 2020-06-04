import React from "react";
import List from "./component/List";
import { v4 as uuid } from "uuid";
import store from "./component/store";
import Context from "./component/Context";
import InputContainer from "./component/InputContainer";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Home from'./component/Home'
function App() {
  const [data, setData] = React.useState(store);
  //add new card
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  //add new list
  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };
  //change title list
  const updateNewListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  // const updateNewCard = (card, listId) => {
  //   const list = data.lists[listId];
  //   list.cards.title =title;
  //   const newState = {
  //     ...data,
  //     lists: {
  //       ...data.lists,
  //       [listId]: list,
  //     }
  //   }
  //   setData(newState);
  // }

  //drop and drag card
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log(destination, source, draggableId);

    if (!destination) {
      return;
    }
    if (type === "list") {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];
    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newState);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };
  return (
    <Context.Provider value={{ addMoreCard, addMoreList, updateNewListTitle }}>
      <div>
      
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="app" type="list" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  backgroundColor: "#4BBF6B",
                  height: "100vh",
                }}
              >
                <div>
                <Home/>
                <h3 style={{padding: 20, fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Training Board</h3>
                  <div style={{ display: "flex", paddingTop: 20 }}>
                    {data.listIds.map((listId, index) => {
                      const list = data.lists[listId];
                      return <List list={list} key={listId} index={index} />;
                    })}
                    <div style={{ marginTop: -10 }}>
                      <InputContainer type="list" />
                    </div>
                  </div>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </Context.Provider>
  );
}

export default App;

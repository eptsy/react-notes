import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

function App() {
  const [addItem, setItem] = useState([]);
  function addNote(note) {
    setItem((prev) => {
      return [...prev, note];
    });
  }
  return (
    <>
      <Header />
      <CreateNote note={addNote} />
      <div className="note-main container">
        {addItem.map((curr, ind) => {
          return (
            <Note
              key={ind}
              id={ind}
              title={curr.title}
              content={curr.content}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;

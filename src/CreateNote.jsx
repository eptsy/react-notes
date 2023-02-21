import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function input_event(e) {
    // const value = e.target.value;
    // const name = e.target.name;
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function add() {
    props.note(note);
  }
  return (
    <div className="main_note">
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={input_event}
          placeholder="title"
          autoComplete="off"
        />
        <textarea
          rows=""
          name="content"
          value={note.content}
          onChange={input_event}
          column=""
          placeholder="Write a note ..."
        ></textarea>
        <Button variant="outlined" onClick={add}>
          <AddCircleOutlineIcon />
        </Button>
      </form>
    </div>
  );
}

export default CreateNote;

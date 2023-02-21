import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function Note(props) {
  return (
    <>
      <div className="note">
        <div className="note-left">
          <h1 className="note-title">{props.title}</h1>
          <p className="note-content">{props.content}</p>
        </div>
        <div className="note-right">
          <button>
            <HighlightOffIcon className="cross" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Note;

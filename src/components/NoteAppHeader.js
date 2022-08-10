import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({getNote, onSearchKeyword}) {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <NoteSearch getNote={getNote} onSearchKeyword={onSearchKeyword}/>
        </div>
    )
}


export default NoteAppHeader; 
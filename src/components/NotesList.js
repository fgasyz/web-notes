import React from "react";
import NoteItem from "./NoteItem";
function NotesList({notes, onDelete, onArchived, searchKeyword}) {
    console.log(searchKeyword);
    const noteFilter = notes.filter(note => note.archived === false && note.title.toLowerCase().includes(searchKeyword));
    if(noteFilter.length !== 0) {
        return (
            <div className="notes-list">
                {
                     noteFilter.map((note) => (
                         <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} {...note}/>
                    ))
                }
            </div>
        )
    }else {
        return <p className="notes-list__empty-message">Tidak ada catatan</p>
    }
}

export default NotesList;
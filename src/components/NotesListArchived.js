import React from "react";
import ArchivedNoteItem from "./ArchivedNoteItem";
function NotesListArchived({notes, onDelete, onUnarchived, searchKeyword}) {
    const noteFilter = notes.filter(note => note.archived === true && note.title.toLowerCase().includes(searchKeyword));
    if(noteFilter.length !== 0) {
        return (
            <div className="notes-list">
                {
                     noteFilter.filter(note => note.archived === true).map((note) => (
                         <ArchivedNoteItem key={note.id} id={note.id} onDelete={onDelete} onUnarchived={onUnarchived} {...note}/>
                    ))
                }
            </div>
        )
    }else {
        return <p className="notes-list__empty-message">Tidak ada catatan</p>
    }
}

export default NotesListArchived;
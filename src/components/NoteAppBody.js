import React from "react";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";
import NotesListArchived from "./NotesListArchived";

function NoteAppBody({notes, addNote, onDelete, onArchived, onUnarchived, searchKeyword}) {
      return (
          <div className="note-app__body"> 
              <NoteForm addNote={addNote}/>
              <h2>Catatan Aktif</h2>
              <NotesList notes={notes} onDelete={onDelete} onArchived={onArchived} searchKeyword={searchKeyword}/>
              <h2>Arsip</h2>
              <NotesListArchived notes={notes} onDelete={onDelete} onUnarchived={onUnarchived} searchKeyword={searchKeyword}/>
          </div>
          )
}

export default NoteAppBody;
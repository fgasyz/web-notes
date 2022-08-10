import React from "react";
import NoteItemContent from "./NoteItemContent";
import ArchivedNoteItemAction from "./ArchivedNoteItemAction";

function ArchivedNoteItem({title, createdAt, body, id, onDelete, onUnarchived}) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            <ArchivedNoteItemAction id={id} onDelete={onDelete} onUnarchived={onUnarchived}/>
        </div>
    )
}   

export default ArchivedNoteItem;
import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({title, createdAt, body, id, onDelete, onArchived}) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            <NoteItemAction id={id} onDelete={onDelete} onArchived={onArchived}/>
        </div>
    )
}   

export default NoteItem;
import React from "react";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";

function NoteItemAction({id, onDelete, onArchived}) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete}/>
            <ArchivedButton id={id} onArchived={onArchived}/>
        </div>
    )
}

export default NoteItemAction;
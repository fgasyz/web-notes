import React from "react";
import DeleteButton from "./DeleteButton";
import UnarchivedButton from "./UnarchivedButton";
function ArchivedNoteItemAction({id, onDelete, onUnarchived}) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete}/>
            <UnarchivedButton id={id} onUnarchived={onUnarchived}/>
        </div>
    )
}

export default ArchivedNoteItemAction;
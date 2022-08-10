import React from "react";

function UnarchivedButton({id, onUnarchived}) {
    return <button className="note-item__archive-button" onClick={() => onUnarchived(id)}>Pindahkan</button>
}

export default UnarchivedButton;
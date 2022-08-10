import React from "react";

function NoteSearch({searchKeyword, onSearchKeyword}) {
    return (
    <div className="note-search">
        <input type="text" placeholder="Cari catatan ..." value={searchKeyword} onChange={onSearchKeyword} />
    </div>
    )
}

export default NoteSearch;
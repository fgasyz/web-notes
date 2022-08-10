import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";


class NoteApp extends React.Component {
    constructor(props) {
        super(props)
        
            this.state = {
                notes: getInitialData(),
                searchKeyword: "",
            }

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchivedNoteHandler = this.onArchivedNoteHandler.bind(this);
        this.onUnarchivedNoteHandler = this.onUnarchivedNoteHandler.bind(this);
        this.onSearchNoteChangeHandler = this.onSearchNoteChangeHandler.bind(this);
    }
    
    onDeleteNoteHandler(id) {
        const notes  = this.state.notes.filter(note => note.id !== id);
        return this.setState({notes});
    }
    
    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                createdAt: showFormattedDate(new Date()),
                title,
                body,
                archived: false,
              }
            ]
          }
        });
      }

    onArchivedNoteHandler(id) {
      const notes  = this.state.notes.filter(note => note.id === id);
      const arsip = (notes[0].archived = true);
      this.setState({arsip});
    }

    onUnarchivedNoteHandler(id) {
        const notes  = this.state.notes.filter(note => note.id === id);
        const archived = (notes[0].archived = false);
        this.setState({archived});
      }

    onSearchNoteChangeHandler(event) {
      this.setState(() => {
          return {
              searchKeyword: event.target.value.toLowerCase()
          }
      })
  }
    render() {
        return (
            <>
            <NoteAppHeader getNote={this.state.searchKeyword} onSearchKeyword={this.onSearchNoteChangeHandler}/>
            <NoteAppBody notes={this.state.notes} addNote={this.onAddNoteHandler} onDelete={this.onDeleteNoteHandler} onArchived={this.onArchivedNoteHandler} onUnarchived={this.onUnarchivedNoteHandler} searchKeyword={this.state.searchKeyword}/>
            </>
        )
    }
}

export default NoteApp;

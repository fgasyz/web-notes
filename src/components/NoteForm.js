import React from "react";

class NoteForm extends React.Component {
    constructor(props, maxLength) {
        super(props)

        this.state = {
            title: ' ',
            body: ' ',
        }

        this.titleLimit = 50;

        this.onNoteTitleChangeEventHandler = this.onNoteTitleChangeEventHandler.bind(this);
        this.onNoteBodyChangeEventHandler = this.onNoteBodyChangeEventHandler.bind(this);
        this.onNoteFormSubmitEventHandler = this.onNoteFormSubmitEventHandler.bind(this);
    }

    getMaxLength(value) {
        const maxLength = 50 - value;
        return maxLength;
    }

    onNoteTitleChangeEventHandler(event) {
        const titleLength = event.target.value.length;
        this.titleLimit = this.getMaxLength(titleLength);
        if(this.titleLimit === -1) {
            alert("maximum title length was reached!");
            return;
        }
            this.setState(() => {
                return {
                    title: event.target.value,
                }
            })
    }

    onNoteBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onNoteFormSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
        <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onNoteFormSubmitEventHandler}>
            <p className="note-input__title__char-limit">Sisa karakter : <span>{this.titleLimit}</span></p>
            <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." required="" value={this.state.title} onChange={this.onNoteTitleChangeEventHandler}/>
            <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." required="" value={this.state.body} onChange={this.onNoteBodyChangeEventHandler}></textarea>
            <button type="submit">Buat</button>
        </form>
        </div>
        )
    }

}

export default NoteForm;
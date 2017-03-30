import { Component } from '@angular/core';
import { NoteService } from '../../services';

@Component({
    selector: 'notes-container',
    styleUrls: ['./app/containers/notes/notes.css'],
    templateUrl: './app/containers/notes/notes.html'
})
export class NotesContainer {
    notes = []
    doneNotes = [];
    
    constructor(private _noteService: NoteService) {
        this.getNotes();
    }

    private getNotes() {
        this._noteService
            .getNotes()
            .subscribe(response => this.notes = response.data);
    }

    onNoteChecked(note) {
        this._noteService
            .completeNote(note)
            .subscribe(note => {
                this.getNotes();
                this.doneNotes.push(note);
        });
    }

    onCreateNote(note) {
        this._noteService
            .createNote(note)
            .subscribe(note => this.getNotes());
    }
}
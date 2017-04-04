import { Component } from '@angular/core';
import { NoteService } from '../../services';
import { Store } from '../../store';

@Component({
    selector: 'notes-container',
    styleUrls: ['./app/containers/notes/notes.css'],
    templateUrl: './app/containers/notes/notes.html'
})
export class NotesContainer {
    notes = []
    doneNotes = [];
    
    constructor(
        private _noteService: NoteService,
        private _store: Store
    ) {
        this.getNotes();
    }

    private getNotes() {
        this._noteService
            .getNotes()
            .subscribe();

        this._store.changes
            .map(data => data.notes)
            .subscribe(notes => this.notes = notes);
    }

    onNoteChecked(note) {
        this._noteService
            .completeNote(note)
            .subscribe(note => {
                this.doneNotes.push(note);
        });
    }

    onCreateNote(note) {
        this._noteService
            .createNote(note)
            .subscribe();
    }
}
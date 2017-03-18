import { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
    styleUrls: ['./app/containers/notes.css'],
    templateUrl: './app/containers/notes.html'
})
export class NotesContainer {
    notes = [
        { title: 'Dimineata', value: 'Mic dejun', color: 'lightblue'},
        { title: 'Pranz', value: 'Curatenie', color: 'lightyellow'},
        { title: 'Seara', value: 'Plimbare', color: 'lightgreen'}
    ]

    doneNotes = [];

    onNoteChecked(i: number) {
        this.doneNotes.push(this.notes[i]);
        this.notes.splice(i, 1);
    }
}
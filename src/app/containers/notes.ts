import { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
    styleUrls: ['./app/containers/notes.css'],
    templateUrl: './app/containers/notes.html'
})
export class NotesContainer {
    note = {
        title: 'First note',
        value: 'Some content for the card'
    }
}
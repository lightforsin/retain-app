import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-creator',
    styleUrls: ['./app/ui/note-creator.css'],
    templateUrl: './app/ui/note-creator.html'
})
export class NoteCreatorComponent {
    @Output() createNote = new EventEmitter();

    newNote = {
        title: '',
        value: ''
    }

    onCreateNote() {
        const {title, value} = this.newNote;

        if(title && value) {
            this.createNote.next({title, value});
        }

        this.reset();
    }

    reset() {
        this.newNote = {
            title: '',
            value: ''
        };
    }
}
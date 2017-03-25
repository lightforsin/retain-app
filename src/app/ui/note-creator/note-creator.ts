import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-creator',
    styleUrls: ['./app/ui/note-creator/note-creator.css'],
    templateUrl: './app/ui/note-creator/note-creator.html'
})
export class NoteCreatorComponent {
    @Output() createNote = new EventEmitter();
    colors: string[] = ['#49d2ca', '#49d2ca', '#c551d3', '#432ff0', '#fd645a', '#1ee209'];

    newNote = {
        title: '',
        value: '',
        color: 'white'
    }

    fullForm: boolean = false;

    toggle(value: boolean) {
        if(value === false){
            if(this.newNote.value || this.newNote.title) {
                return;
            }
        }
        this.fullForm = value;
    }

    onCreateNote() {
        const {title, value, color} = this.newNote;

        if(title && value) {
            this.createNote.next({title, value, color});
        }

        this.reset();
        this.toggle(false);
    }

    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        };
    }

    onColorSelect(color: string) {
        this.newNote.color = color;
    }
}
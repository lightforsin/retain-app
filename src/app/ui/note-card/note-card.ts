import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-card',
    styleUrls: ['./app/ui/note-card/note-card.css'],
    templateUrl: './app/ui/note-card/note-card.html'
})
export class NoteCardComponent {
    @Input() note;
    @Output() checked = new EventEmitter();
    showCheck: boolean = false;

    onChecked() {
        this.checked.next(this.note);
    }

    toggleCheck() {
        this.showCheck = !this.showCheck;
    }
}
import { Component, Input } from '@angular/core';

@Component({
    selector: 'note-card',
    styleUrls: ['./app/ui/note-card.css'],
    templateUrl: './app/ui/note-card.html'
})
export class NoteCardComponent {
    @Input() note;

    onChecked() {
        console.log('Note checked');
    }
}
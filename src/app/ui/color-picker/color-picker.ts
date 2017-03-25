import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'color-picker',
    styleUrls: ['./app/ui/color-picker/color-picker.css'],
    templateUrl: './app/ui/color-picker/color-picker.html'
})
export class ColorPickerComponent {
    @Input() colors: string[] = [];
    @Output() selected = new EventEmitter();

    isSelectorVisible: boolean = false;

    selectColor(color: string) {
        this.showSelector(false);
        this.selected.next(color);
    }

    showSelector(value: boolean) {
        this.isSelectorVisible = value;
    }
}
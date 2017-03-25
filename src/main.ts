import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';
import { Main } from './app/containers';
import { NotesContainer } from './app/containers';
import { AppBarComponent } from './app/ui';
import { NoteCardComponent } from './app/ui';
import { NoteCreatorComponent } from './app/ui';
import { ColorPickerComponent } from './app/ui';

@NgModule({
    declarations: [
        AppComponent,
        Main,
        NotesContainer,
        AppBarComponent,
        NoteCardComponent,
        NoteCreatorComponent,
        ColorPickerComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);
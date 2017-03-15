import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';
import { Main } from './app/containers';
import { NotesContainer } from './app/containers';
import { AppBarComponent } from './app/ui';
import { NoteCardComponent } from './app/ui';

@NgModule({
    declarations: [
        AppComponent,
        Main,
        NotesContainer,
        AppBarComponent,
        NoteCardComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);
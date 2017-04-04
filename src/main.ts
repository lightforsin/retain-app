import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { AppComponent, providers, routes } from './app';
import { 
    MainComponent, 
    NotesContainer, 
    AboutComponent ,
    AuthComponent
} from './app/containers';
import { 
    AppBarComponent, 
    NoteCardComponent,
    NoteCreatorComponent,
    ColorPickerComponent 
} from './app/ui';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        NotesContainer,
        AppBarComponent,
        NoteCardComponent,
        NoteCreatorComponent,
        ColorPickerComponent, 
        AboutComponent,
        AuthComponent
    ],
    providers: [providers],
    imports: [
        BrowserModule, 
        FormsModule, 
        HttpModule,
        routes
    ],
    bootstrap: [AppComponent]
})
export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);
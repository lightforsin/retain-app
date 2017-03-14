import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';
import { MainComponent } from './app/containers';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);
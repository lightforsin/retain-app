import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent, NotesContainer, AboutComponent} from './containers';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', component: NotesContainer },
            { path: 'about', component: AboutComponent }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
]);
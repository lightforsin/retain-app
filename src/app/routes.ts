import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { 
    MainComponent, 
    NotesContainer, 
    AboutComponent, 
    AuthComponent
} from './containers';
import { AuthService } from './services';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthService],
        children: [
            { path: '', component: NotesContainer },
            { path: 'about', component: AboutComponent }
        ]
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]);
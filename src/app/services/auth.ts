import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StoreHelper } from './store-helper';
import { Store } from '../store';
import { ApiService } from './api';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class AuthService implements CanActivate {
    JWT_KEY: string = 'retain_token';
    JWT: string = 'asdf';

    constructor(
        private _router: Router,
        private _storeHelper: StoreHelper,
        private _store: Store,
        private _apiService: ApiService
    ) {
        const token = window.localStorage.getItem(this.JWT_KEY);

        if(token) {
            this.setJwt(token);
        }
    }

    setJwt(jwt: string) {
        window.localStorage.setItem(this.JWT_KEY, jwt);
        this._apiService.setHeaders({Authorization: `Bearer ${jwt}`});
    }

    isAuthorized(): boolean {
        return Boolean(this.JWT);
    }

    canActivate(): boolean {
        const canActivate = this.isAuthorized();
        this.onCanActivate(canActivate);
        return canActivate;
    }

    onCanActivate(canActivate: boolean) {
        if(!canActivate) {
            this._router.navigate(['', 'auth']);
        }
    }

    authenticate(path, credits): Observable<any> {
        return this._apiService.post(`/${path}`, credits)
        .do(resp => this.setJwt(resp.token))
        .do(resp => this._storeHelper.update('user', resp.data))
        .map(resp => resp.data);
    }

    signout() {
        window.localStorage.removeItem(this.JWT_KEY);
        this._store.purge();
        this._router.navigate(['', 'auth']);
    }
}
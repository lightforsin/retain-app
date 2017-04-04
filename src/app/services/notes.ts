import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { StoreHelper } from './store-helper';
import 'rxjs/Rx';

@Injectable()
export class NoteService {
    path: string = '/notes';

    constructor(
        private _api: ApiService,
        private _storeHelper: StoreHelper
        ) {}

    createNote(note) {
        return this._api.post(this.path, note)
        .do(savedNote => this._storeHelper.add('notes', savedNote));
    }

    getNotes() {
        return this._api.get(this.path)
        .do(resp => this._storeHelper.update('notes', resp.data));
    }

    completeNote(note) {
        return this._api.delete(`${this.path}/${note.id}`)
        .do(resp => this._storeHelper.findAndDelete('notes', resp.id));
    }
}
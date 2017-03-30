import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class NoteService {
    path: string = '/notes';

    constructor(private _api: ApiService) {

    }

    createNote(note) {
        return this._api.post(this.path, note);
    }

    getNotes() {
        return this._api.get(this.path);
    }

    completeNote(note) {
        return this._api.delete(`${this.path}/${note.id}`);
    }
}
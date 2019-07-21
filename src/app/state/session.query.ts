import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';

export class SessionQuery extends Query<SessionState> {
   isLoggedIn$ = this.select(state => toBoolean(state.token));
   private _isLoggedIn: Boolean;

   constructor(protected store: SessionStore) {
       super(store);
   }

   isLoggedIn() {
       this.select(state => toBoolean(state.token)).subscribe({
           next: value => this._isLoggedIn = value
       });
       return this._isLoggedIn;
   }

   getUsername() {
       if(this.isLoggedIn()){
           return this.select(state => state.username);
       }
   }

   getToken() {
       if(this.isLoggedIn()){
           return this.select(state => state.token);
       }
   }
}

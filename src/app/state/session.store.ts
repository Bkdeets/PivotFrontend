import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";

export type SessionState = {
  username: String;
  token: String;
}

export function createInitialSessionState(): SessionState {
  return {
    username: null,
    token: null
  }
}

@StoreConfig({ name: "session" })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialSessionState());
  }

  login(session: SessionState) {
    this.update(session);
  }

  logout() {
    this.update(createInitialSessionState());
  }
}

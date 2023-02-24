import { SESSION_ID, TOKEN_NAME } from "../consts/storage";

class AUTH_TOKEN {
  static add(data) {
    localStorage.setItem(TOKEN_NAME, data);
  }
  static get() {
    const rspt = localStorage.getItem(TOKEN_NAME);
    if (rspt) return rspt;
    localStorage.removeItem(TOKEN_NAME);
    SESSION_ID_STORAGE.remove();
    return null;
  }

  static remove() {
    localStorage.removeItem(TOKEN_NAME);
    SESSION_ID_STORAGE.remove();
  }
}

class SESSION_ID_STORAGE {
  static add(data) {
    localStorage.setItem(SESSION_ID, data);
  }
  static get() {
    const rspt = localStorage.getItem(SESSION_ID);
    if (rspt) return rspt;
    localStorage.removeItem(SESSION_ID);
    return null;
  }
  static remove() {
    localStorage.removeItem(SESSION_ID);
  }
}

export { AUTH_TOKEN, TOKEN_NAME, SESSION_ID_STORAGE };

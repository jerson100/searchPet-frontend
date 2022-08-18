const TOKEN_NAME = "AUTH_TOKEN";

class AUTH_TOKEN {
  static add(data) {
    localStorage.setItem(TOKEN_NAME, data);
  }
  static get() {
    const rspt = localStorage.getItem(TOKEN_NAME);
    if (rspt) return rspt;
    localStorage.removeItem(TOKEN_NAME);
    return null;
  }

  static remove() {
    localStorage.removeItem(TOKEN_NAME);
  }
}

export { AUTH_TOKEN, TOKEN_NAME };

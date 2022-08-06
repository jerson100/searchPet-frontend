const TOKEN_NAME = "AUTH_TOKEN";

class AUTH_TOKEN {
  static add(data) {
    localStorage.setItem(TOKEN_NAME, JSON.stringify(data));
  }
  static get() {
    const rspt = localStorage.getItem(TOKEN_NAME);
    try {
      return JSON.parse(rspt);
    } catch (e) {
      return null;
    }
  }
}

export { AUTH_TOKEN, TOKEN_NAME };

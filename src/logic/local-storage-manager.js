class LocalStorageManager {
  
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key, defaultValue) {
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      return JSON.parse(stored);
    } else {
      return defaultValue;
    }
  }
}

export const localStorageManager = new LocalStorageManager();
import {useState} from "react";

export function useLocalStorage(key, initialValue) {

  const [value, setValue] = useState(() => {
    try {
      const item = sessionStorage.getItem(key)
      return item != null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
      console.log(e)
    }
  });

  const setLocalStorage = value => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }
  return [value, setLocalStorage];
}

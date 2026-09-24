import { SET_MESSAGE } from "../reducer/chat.reducer";
import { store } from "../store";
import type { Message } from "../../types";

export function setMessage(message: Message) {
  try {
    store.dispatch({ type: SET_MESSAGE, message });
  } catch (error) {
    throw new Error(`Failed to set message: ${error}`);
  }
}

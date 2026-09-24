import type { Message } from "../../types";

export const SET_MESSAGE = "SET_MESSAGE";

const initialState = {
  messages: [] as Message[],
};

export function chatReducer(state = initialState, action = {} as any) {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    default:
      return state;
  }
}

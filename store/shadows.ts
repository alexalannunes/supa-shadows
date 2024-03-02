import { v4 } from "uuid";
import { shadowBase } from "../pages";

export type Action =
  | { type: "ADD" }
  | { type: "REMOVE"; payload: { id: string } }
  | { type: "TOGGLE_ACTIVE"; payload: { id: string } }
  | { type: "TOGGLE_INSET"; payload: { id: string } }
  | { type: "UPDATE_Y"; payload: { id: string; value: number } }
  | { type: "UPDATE_X"; payload: { id: string; value: number } }
  | { type: "UPDATE_BLUR"; payload: { id: string; value: number } }
  | { type: "UPDATE_SPREAD"; payload: { id: string; value: number } }
  | { type: "UPDATE_COLOR"; payload: { id: string; value: string } };

export function shadowsReducer(initialState = [shadowBase], action: Action) {
  if (action.type === "ADD") {
    return [...initialState, { ...shadowBase, id: v4() }];
  }
  if (action.type === "REMOVE") {
    return initialState.filter((item) => item.id !== action.payload.id);
  }
  if (action.type === "TOGGLE_ACTIVE") {
    return initialState.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          active: !item.active,
        };
      }
      return item;
    });
  }
  if (action.type === "TOGGLE_INSET") {
    return initialState.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          inset: !item.inset,
        };
      }
      return item;
    });
  }
  if (action.type === "UPDATE_X") {
    return initialState.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          x: action.payload.value,
        };
      }
      return item;
    });
  }
  if (action.type === "UPDATE_Y") {
    return initialState.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          y: action.payload.value,
        };
      }
      return item;
    });
  }
  if (action.type === "UPDATE_BLUR") {
    return initialState.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          blur: action.payload.value,
        };
      }
      return item;
    });
  }
  if (action.type === "UPDATE_SPREAD") {
    return initialState.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          spread: action.payload.value,
        };
      }
      return item;
    });
  }

  if (action.type === "UPDATE_COLOR") {
    return initialState.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          color: action.payload.value,
        };
      }
      return item;
    });
  }

  return initialState;
}

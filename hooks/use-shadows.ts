import { useCallback, useReducer } from "react";
import { shadowBase } from "../pages";
import { shadowsReducer } from "../store/shadows";

export function useShadows() {
  const [shadows, dispatch] = useReducer(shadowsReducer, [shadowBase]);

  const handleAddSahdow = useCallback(() => {
    dispatch({ type: "ADD" });
  }, []);

  const handleToggleActive = useCallback((id: string) => {
    dispatch({ type: "TOGGLE_ACTIVE", payload: { id } });
  }, []);

  const handleToggleInset = useCallback((id: string) => {
    dispatch({ type: "TOGGLE_INSET", payload: { id } });
  }, []);

  const handleRemove = useCallback((id: string) => {
    dispatch({ type: "REMOVE", payload: { id } });
  }, []);

  const handleHorizontalOffset = useCallback((id: string, value: number) => {
    dispatch({ type: "UPDATE_X", payload: { id, value } });
  }, []);

  const handleVerticalOffset = useCallback((id: string, value: number) => {
    dispatch({ type: "UPDATE_Y", payload: { id, value } });
  }, []);

  const handleBlur = useCallback((id: string, value: number) => {
    dispatch({ type: "UPDATE_BLUR", payload: { id, value } });
  }, []);

  const handleSpread = useCallback((id: string, value: number) => {
    dispatch({ type: "UPDATE_SPREAD", payload: { id, value } });
  }, []);

  const handleColor = useCallback((id: string, value: string) => {
    dispatch({ type: "UPDATE_COLOR", payload: { id, value } });
  }, []);

  return {
    shadows,
    handleAddSahdow,
    handleToggleActive,
    handleToggleInset,
    handleRemove,
    handleHorizontalOffset,
    handleVerticalOffset,
    handleBlur,
    handleSpread,
    handleColor,
  };
}

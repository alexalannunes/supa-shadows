import { useReducerAtom } from "jotai/utils";
import { useCallback } from "react";
import { shadowsAtom } from "../pages";
import { shadowsReducer } from "../store/shadows";

export function useShadows() {
  const [shadows, dispatch] = useReducerAtom(shadowsAtom, shadowsReducer);

  const handleAddShadow = useCallback(() => {
    dispatch({ type: "ADD" });
  }, [dispatch]);

  const handleToggleActive = useCallback(
    (id: string) => {
      dispatch({ type: "TOGGLE_ACTIVE", payload: { id } });
    },
    [dispatch]
  );

  const handleToggleInset = useCallback(
    (id: string) => {
      dispatch({ type: "TOGGLE_INSET", payload: { id } });
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (id: string) => {
      dispatch({ type: "REMOVE", payload: { id } });
    },
    [dispatch]
  );

  const handleHorizontalOffset = useCallback(
    (id: string, value: number) => {
      dispatch({ type: "UPDATE_X", payload: { id, value } });
    },
    [dispatch]
  );

  const handleVerticalOffset = useCallback(
    (id: string, value: number) => {
      dispatch({ type: "UPDATE_Y", payload: { id, value } });
    },
    [dispatch]
  );

  const handleBlur = useCallback(
    (id: string, value: number) => {
      dispatch({ type: "UPDATE_BLUR", payload: { id, value } });
    },
    [dispatch]
  );

  const handleSpread = useCallback(
    (id: string, value: number) => {
      dispatch({ type: "UPDATE_SPREAD", payload: { id, value } });
    },
    [dispatch]
  );

  const handleColor = useCallback(
    (id: string, value: string) => {
      dispatch({ type: "UPDATE_COLOR", payload: { id, value } });
    },
    [dispatch]
  );

  return {
    handleAddShadow,
    handleBlur,
    handleColor,
    handleHorizontalOffset,
    handleRemove,
    handleSpread,
    handleToggleActive,
    handleToggleInset,
    handleVerticalOffset,
    shadows,
  };
}

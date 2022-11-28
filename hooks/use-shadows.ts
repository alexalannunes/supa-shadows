import { useSetAtom } from "jotai";
import { useReducerAtom } from "jotai/utils";
import { useCallback, useEffect } from "react";
import { shadowsAtom, shadowStringAtom } from "../pages";
import { shadowsReducer } from "../store/shadows";
import { Shadow } from "../types";
import { buildShadow } from "../utils";
export function useShadows() {
  const [shadows, dispatch] = useReducerAtom(shadowsAtom, shadowsReducer);
  const updateShadowString = useSetAtom(shadowStringAtom);

  const handleAddSahdow = useCallback(() => {
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
  useEffect(() => {
    const shadowsString = shadows
      .filter((i: Shadow) => i.active)
      .map(buildShadow)
      .join(",");

    updateShadowString(shadowsString);
  }, [shadows, updateShadowString]);

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

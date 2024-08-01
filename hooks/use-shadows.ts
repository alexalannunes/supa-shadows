import { useReducerAtom } from "jotai/utils";
import { useCallback, useEffect, useRef } from "react";
import { shadowsAtom } from "../pages";
import { shadowsReducer } from "../store/shadows";
import { Shadow } from "../types";
import { NextRouter, useRouter } from "next/router";
import { base64 } from "../utils";
import { quickDebounce } from "../utils/quick-debounce";

export function useShadows() {
  const router = useRouter() as NextRouter & {
    query: {
      shadow?: string;
    };
  };

  const [shadows, dispatch] = useReducerAtom(shadowsAtom, shadowsReducer);

  const handleAddShadow = useCallback(() => {
    dispatch({ type: "ADD" });

    // if (process.env.NODE_ENV === "production") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag("event", "button_click", {
      event_name: "Add new shadow",
    });
    // }
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

  const skipUrlUpdate = useRef(true);

  const setShadows = useCallback(
    (newShadows: Shadow[]) => {
      dispatch({ type: "SET", payload: newShadows });
    },
    [dispatch]
  );

  // read shadow param
  useEffect(() => {
    if (skipUrlUpdate.current && router.isReady && router.query?.shadow) {
      const shadowsParams = JSON.parse(base64.decode(router.query.shadow));

      if (shadowsParams.length) {
        setShadows(shadowsParams);
        skipUrlUpdate.current = false;
      }

      return;
    }
    // is no shadow query is present, so can update url on initial state
    if (skipUrlUpdate.current && router.isReady) {
      skipUrlUpdate.current = false;
    }
  }, [router.isReady, router.query.shadow, setShadows]);

  useEffect(() => {
    if (!skipUrlUpdate.current) {
      quickDebounce(() => {
        router.replace({
          pathname: "/",
          query: {
            shadow: base64.encode(
              // generate only active shadows
              JSON.stringify(shadows.filter((a) => a.active))
            ),
          },
        });
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shadows]);

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

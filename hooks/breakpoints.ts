import { useMediaQuery } from "@chakra-ui/react";

// https://chakra-ui.com/docs/styled-system/responsive-styles

export function useSm() {
  return useMediaQuery("(min-width: 30rem)");
}

export function useMd() {
  return useMediaQuery("(min-width: 48rem)");
}

export function useLg() {
  return useMediaQuery("(min-width: 62rem)");
}

export function useXl() {
  return useMediaQuery("(min-width: 80rem)");
}

export function use2Xl() {
  return useMediaQuery("(min-width: 96rem)");
}

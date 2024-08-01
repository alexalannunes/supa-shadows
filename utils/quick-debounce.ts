let timeout: NodeJS.Timeout;

export function quickDebounce(fn: () => void) {
  if (timeout) clearTimeout(timeout);

  timeout = setTimeout(fn, 500);
}

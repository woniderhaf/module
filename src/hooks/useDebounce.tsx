type TDebounce = (func: () => void, ms?: number) => () => void;
export const useDebounce: TDebounce = (func, ms = 1000) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(func, ms);
  };
};


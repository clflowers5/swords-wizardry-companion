import { useEffect, useRef, useCallback } from "react";

function useTimeoutFn(fn, timeoutInMs) {
  const ready = useRef(false);
  const timeout = useRef();
  const callback = useRef(fn);

  const isReady = useCallback(() => ready.current, []);
  const clearRefTimeout = useCallback(
    () => timeout.current && clearTimeout(timeout.current),
    []
  );

  const reset = useCallback(() => {
    ready.current = false;
    clearRefTimeout();

    timeout.current = setTimeout(() => {
      ready.current = true;
      callback.current();
    }, timeoutInMs);
  }, [clearRefTimeout, timeoutInMs]);

  const clear = useCallback(() => {
    ready.current = null;
    clearRefTimeout();
  }, [clearRefTimeout]);

  useEffect(
    function updateRefPerFunction() {
      callback.current = fn;
    },
    [fn]
  );

  useEffect(
    function resetTimeout() {
      reset();

      return clear;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [timeoutInMs]
  );

  return [isReady, clear, reset];
}

function useDebounce(fn, timeoutInMs = 0, dependencies = []) {
  const [isReady, cancel, reset] = useTimeoutFn(fn, timeoutInMs);

  useEffect(reset, dependencies);

  return [isReady, cancel];
}

export { useDebounce as default, useTimeoutFn };

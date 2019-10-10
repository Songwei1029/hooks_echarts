import { useEffect, useRef } from 'react';

// 忽略第一调用，只有deps改变的时候调用
const useDidUpdate = (callback, deps) => {
  const isInitialMount = useRef(true);
  useEffect(
    isInitialMount.current
      ? () => {
          isInitialMount.current = false;
        }
      : callback,
    deps
  );
};

export default useDidUpdate;

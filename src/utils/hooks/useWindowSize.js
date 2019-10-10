import { useState, useEffect } from 'react';

const initialvalue = {
  innerWidth: null,
  innerHeight: null,
  outerWidth: null,
  outerHeight: null
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(initialvalue);

  function getWindowSize() {
    setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight
    });
  }

  // 在mount的时候执行
  useEffect(() => {
    // 执行一次
    getWindowSize();
  }, []);

  // 绑定window resize事件，在unmount的是清除绑定
  useEffect(() => {
    window.addEventListener('resize', getWindowSize);
    return () => {
      window.removeEventListener('resize', getWindowSize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;

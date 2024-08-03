import { useEffect, useState } from 'react';

/**
 * Custom hook to return whether the current screen width is less than desired width.
 */
const useMediaQuery = (minWidth) => {
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isDesiredWidth: window.innerWidth < minWidth,
  });

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < minWidth;
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [state.windowWidth, minWidth]);

  return state.isDesiredWidth;
};

export default useMediaQuery;

import { useEffect, useState } from "react";

//component css animation effect 
//delay를 통한 effect 
const useMountTransition = (isMounted, unmountDelay) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !hasTransitionedIn) { //t, t  return t 
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {  // after delay 
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, hasTransitionedIn]);
  return hasTransitionedIn;
};
export default useMountTransition;

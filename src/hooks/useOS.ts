import { useCallback, useEffect, useState } from "react";
import { useViewport } from "src/atoms/hooks/viewport";

import { isIOS, isMacOS } from "@/lib/os";

export const useOS = () => {
  const [state, setState] = useState<{
    isMacOS: boolean;
    isIOS: boolean;
    isIphone: boolean;
    isiPad: boolean;
    device: "unknown" | "macOS" | "iOS" | "iPadOS";
  }>({
    isMacOS: false,
    isIOS: false,
    isIphone: false,
    isiPad: false,

    device: "unknown",
  });
  const { isMobile, isPad } = useViewport(
    useCallback(
      (state) => ({
        isMobile: state.w < 768,
        isPad: state.w >= 768,
      }),
      []
    )
  );

  useEffect(() => {
    const ios = isIOS();
    const macos = isMacOS();

    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setState({
      isMacOS: macos,
      isIOS: ios,
      isIphone: ios && isMobile,
      isiPad: ios && isPad,
      device: macos ? "macOS" : ios ? (isMobile ? "iOS" : "iPadOS") : "unknown",
    });
  }, [isMobile, isPad]);
  return state;
};

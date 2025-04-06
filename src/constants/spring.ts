import type { Spring } from "framer-motion";

/**
 * A smooth spring with a predefined duration and no bounce.
 */
export const smoothPreset: Spring = {
  type: "spring",
  duration: 0.5,
  bounce: 0,
};

/**
 * A smooth spring with a predefined duration and no bounce that can be tuned.
 *
 * @param duration The perceptual duration, which defines the pace of the spring.
 * @param extraBounce How much additional bounce should be added to the base bounce of 0.
 */
export function smooth(duration = 0.5, extraBounce = 0): Spring {
  return {
    type: "spring",
    duration,
    bounce: extraBounce,
  };
}

/**
 * A spring with a predefined duration and small amount of bounce that feels more snappy.
 */
export const snappyPreset: Spring = {
  type: "spring",
  duration: 0.5,
  bounce: 0.15,
};

/**
 * A spring with a predefined duration and small amount of bounce that feels more snappy and can be tuned.
 *
 * @param duration The perceptual duration, which defines the pace of the spring.
 * @param extraBounce How much additional bounciness should be added to the base bounce of 0.15.
 */
export function snappy(duration = 0.5, extraBounce = 0): Spring {
  return {
    type: "spring",
    duration,
    bounce: 0.15 + extraBounce,
  };
}

/**
 * A spring with a predefined duration and higher amount of bounce.
 */
export const bouncyPreset: Spring = {
  type: "spring",
  duration: 0.5,
  bounce: 0.3,
};

/**
 * A spring with a predefined duration and higher amount of bounce that can be tuned.
 *
 * @param duration The perceptual duration, which defines the pace of the spring.
 * @param extraBounce How much additional bounce should be added to the base bounce of 0.3.
 */
export function bouncy(duration = 0.5, extraBounce = 0): Spring {
  return {
    type: "spring",
    duration,
    bounce: 0.3 + extraBounce,
  };
}


/**
 * Precise linear interpolation between two scalars
 */
export const lerp = ( a, b, t = 0 ) => {
  return a * ( 1 - t ) + b * t
}

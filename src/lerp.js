// @flow strict
import type { ScalarMath } from '@soulofmischief/flow-types'


/** Linear interpolation between two scalars */
export const lerp: ScalarMath = ( min, max, t ) => {
  /*
   * Get difference, multiply by `t` and add min.
   *
   * The ratio `t` represents the percentage of that difference
   * we add back to min. A value of `t = 1` adds 100%
   * of the difference, giving us the maximum value.
   *
   * This is a more precise form of linear interpolation,
   * which ensures t=1 always equals max.
   */
  return ( 1 - t ) * min + t * max
}

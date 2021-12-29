// @flow strict
import type { ScalarMath } from '@soulofmischief/flow-types'


/** Linear interpolation between two scalars */
export const lerp: ScalarMath = ( a, b, t = 0 ) => {
  /*
   * Get difference, multiply by `t` and add a.
   *
   * The ratio `t` represents the percentage of that difference
   * we add back to a. A value of `t = 1` adds 100%
   * of the difference, giving us the maximum value.
   *
   * This is a more precise form of linear interpolation,
   * which ensures t=1 always equals b.
   */
  return ( 1 - t ) * a + t * b
}

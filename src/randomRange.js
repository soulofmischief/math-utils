// @flow strict
import type { ScalarMath } from 'Flow'


/**
 * Multiply random() by the range between min and max,
 * then offset by the minimum.
 */
export const randomRange: ScalarMath = ( min, max ) => {
  return Math.random() * ( max - min ) + min
}

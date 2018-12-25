// @flow strict
import type { ScalarMath } from '@soulofmischief/flow-types'


/** Map a value from one range to another. */
export const mapToNewRange: ScalarMath = (
  value, inMin, inMax, outMin, outMax
) => {
  return ( value - inMin ) * ( outMax - outMin ) / ( inMax - inMin ) + outMin
}

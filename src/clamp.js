// @flow strict
import type { ScalarMath } from '@soulofmischief/flow-types'


/** Clamp value between min and max */
export const clamp: ScalarMath = ( value, min = 0, max = 1 ) =>
  Math.min( Math.max( min, value ), max )


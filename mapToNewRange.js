
/**
 * Map a value from one range to another.
 */
export const mapToNewRange = ( value, inMin, inMax, outMin, outMax ) => {
  return ( value - inMin )
    * ( outMax - outMin )
    / ( inMax - inMin )
    + outMin
}

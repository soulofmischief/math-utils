
/** Clamp value between min and max */
export const clamp = ( value, min = 0, max = 1 ) =>
  Math.min( Math.max( min, value ), max )

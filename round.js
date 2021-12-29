
/**
 * Round a number with a given step modifier..
 */
export const round = ( value, step = 1.0 ) => {
  // Don't make black holes.
  if ( step ) {
    const fraction = 1.0 / step
    return Math.round( value * fraction ) / fraction
  }

  // Don't round if step is zero. We can't divide by zero anyway.
  else return value
}

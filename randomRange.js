
/**
 * Multiply random() by the range between min and max,
 * then offset by the minimum.
 */
export const randomRange = ( min, max ) => {
  return Math.random() * ( max - min ) + min
}

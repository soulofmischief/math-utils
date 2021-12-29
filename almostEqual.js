
export function almostEqual( a, b, epsilon = 0.0000001 ) {
  return Math.abs( a - b ) < epsilon
}

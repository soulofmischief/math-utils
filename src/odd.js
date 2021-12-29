
export function odd( x, add = true ) {
  return x % 2 ? x : x + ( add ? 1 : -1 )
}

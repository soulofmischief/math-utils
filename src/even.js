
export function even( x, add = true ) {
  return x % 2 ? x + ( add ? 1 : -1 ) : x
}

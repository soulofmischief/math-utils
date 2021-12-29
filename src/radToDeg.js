// @flow strict


export function radToDeg( radian: number ): number {
  return radian / ( Math.PI / 180 )
}


// r = (d * pi ) / 180
// d * pi = r / 180
// d = (r / 180 ) / pi

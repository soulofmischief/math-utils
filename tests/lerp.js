import o from 'ospec'
import { lerp } from '../src'


const
  a = 0,
  b = 100

o.spec( 'lerp', () => {
  o( 't -> 0 === a', () => {
    o( lerp( a, b, 0 )).equals( a )
  })

  o( 't -> 1 === b', () => {
    o( lerp( a, b, 1 )).equals( b )
  })

  o( 'default is 0', () => {
    o( lerp( a, b )).equals( a )
  })
})

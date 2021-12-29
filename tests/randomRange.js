import o from 'ospec'
import { randomRange } from '../index.js'


o.spec( 'randomRange', () => {
  o( 'returns random value inside range', () => {
    o( test ).notThrows( 'Invalid value' )
  })
})

function test() {
  for ( let i = 0, val; i < 100; i++ ) {
    val = randomRange( 10, 20 )

    if ( !( val >= 10 && val <  20 ))
      throw new Error( 'Invalid value' )
  }
}

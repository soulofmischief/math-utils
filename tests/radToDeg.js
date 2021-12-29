import o from 'ospec'
import { radToDeg } from '../src'

o.spec( 'radToDeg', () => {
  o( 'Full rotation', () => {
    o( radToDeg( 2 * Math.PI )).equals( 360 )
  })
})

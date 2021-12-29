import o from 'ospec'
import { degToRad } from '../index.js'

o.spec( 'degToRad', () => {
  o( 'Full rotation', () => {
    o( degToRad( 360 )).equals( 2 * Math.PI )
  })
})

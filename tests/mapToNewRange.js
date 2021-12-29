import o from 'ospec'
import { mapToNewRange } from '../index.js'


o.spec( 'mapToNewRange', () => {
  o( 'correctly maps value to new range', () => {
    o( mapToNewRange( 0.5, 0, 1, 100, 200 )).equals( 150 )
  })
})

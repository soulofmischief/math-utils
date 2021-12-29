import o from 'ospec'
import { identity } from '../index.js'


const x = { a: 1, b: 2 }

o.spec( 'identity', () => {
  o( 'returns input', () => {
    o( identity( x )).equals( x )
  })
})

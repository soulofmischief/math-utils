import o from 'ospec'
import { almostEqual } from '../index.js'


const
  epsilon = 0.0000001,
  a = 1,
  b = a + epsilon / 2,
  c = a + epsilon


o.spec( 'almostEqual', () => {
  o.spec( 'Default epsilon', () => {
    o( 'True', () => {
      o( almostEqual( a, b )).equals( true )
    })

    o( 'False', () => {
      o( almostEqual( a, c )).equals( false )
    })
  })

  o.spec( 'Custom epsilon', () => {
    o( 'True', () => {
      o( almostEqual( a, b, epsilon )).equals( true )
    })

    o( 'False', () => {
      o( almostEqual( a, c, epsilon )).equals( false )
    })
  })
})

import o from 'ospec'
import { even } from '../src'


const
  x1 = 1,
  x2 = 2

o.spec( 'even', () => {
  o.spec( 'Is odd', () => {
    o( 'Add', () => {
      o( even( x1 )).equals( x1 + 1 )
    })

    o( 'Subtract', () => {
      o( even( x1, false )).equals( x1 - 1 )
    })
  })

  o.spec( 'Is even', () => {
    o( 'Add', () => {
      o( even( x2 )).equals( x2 )
    })

    o( 'Subtract', () => {
      o( even( x2, false )).equals( x2 )
    })
  })
})

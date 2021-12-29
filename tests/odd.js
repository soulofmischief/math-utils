import o from 'ospec'
import { odd } from '../src'


const
  x1 = 1,
  x2 = 2

o.spec( 'odd', () => {
  o.spec( 'Is odd', () => {
    o( 'Add', () => {
      o( odd( x1 )).equals( x1 )
    })

    o( 'Subtract', () => {
      o( odd( x1, false )).equals( x1 )
    })
  })

  o.spec( 'Is even', () => {
    o( 'Add', () => {
      o( odd( x2 )).equals( x2 + 1 )
    })

    o( 'Subtract', () => {
      o( odd( x2, false )).equals( x2 - 1 )
    })
  })
})

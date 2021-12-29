import o from 'ospec'
import { round } from '../index.js'


o.spec( 'round', () => {
  o( 'Rounds to given step.', () => {
    o( round( 0.5,  1    )).equals( 1    )
    o( round( 0.5,  0.1  )).equals( 0.5  )
    o( round( 0.5,  0.01 )).equals( 0.5  )
    o( round( 0.05, 0.1  )).equals( 0.1  )
    o( round( 0.05, 0.01 )).equals( 0.05 )
  })

  o( 'Defaults to step size of 1', () => {
    o( round( 0.5 )).equals( 1 )
  })
})

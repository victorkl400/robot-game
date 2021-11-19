import { useContext } from 'react'
import Camera from '../src/components/Camera/camera'
import Character from '../src/components/Character/character'
import Map from '../src/components/Map/map'
import { MovementContext } from '../src/contexts/MovementContext'

export default function Home() {
  const { active } = useContext(MovementContext)
  return (

    <div style={{ width: '100vw', height: '100vh', background: 'red' }}>
      <h1>active: {active ? 'true' : 'false'}</h1>
      <Camera>
      <Map>
        <Character/>
      </Map>
    </Camera>
    </div>
  )
}

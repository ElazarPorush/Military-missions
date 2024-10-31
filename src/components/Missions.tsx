import React, { useEffect, useState } from 'react'
import Item from './Item'
import Mission from '../models/missionModel'

interface Props {
  changeMissions: number,
  setChangeMissions: (x: number) => void
}

export default function Missions({changeMissions, setChangeMissions}: Props) {
  const [missions, setMissions] = useState([<Item item={{} as Mission} changeMission={changeMissions} setChangeMissions={setChangeMissions}/>])
  useEffect(() => {
    (async() => {
      const result = await fetch('https://reactexambackend.onrender.com/missions/9132635')
      const data: Mission[] = await result.json()
      setMissions(data.map(item => <Item item={item} changeMission={changeMissions} setChangeMissions={setChangeMissions}/>))
    })()
  }, [changeMissions])
  
  return (
    <div>
        {missions}
    </div>
  )
}

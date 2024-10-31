import React, { useEffect, useState } from 'react'
import Item from './Item'
import Mission from '../models/missionModel'

interface Props {
  changeMissions: number
}

export default function Missions({changeMissions}: Props) {
  const [missions, setMissions] = useState([<Item item={{} as Mission}/>])
  useEffect(() => {
    (async() => {
      const result = await fetch('https://reactexambackend.onrender.com/missions/9132635')
      const data: Mission[] = await result.json()
      setMissions(data.map(item => <Item item={item}/>))
    })()
  }, [changeMissions])
  
  return (
    <div>
        {missions}
    </div>
  )
}

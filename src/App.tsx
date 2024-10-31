import { useState } from "react";
import AddMission from "./components/addMission";
import Missions from "./components/Missions";


export default function App() {
  const [changeMissions, setChangeMissions] = useState(0)
  return (
    <div>
      <h1>Military Operations Dashboard</h1>
      <AddMission changeMissions={changeMissions} setChangeMissions={setChangeMissions}/>
      <h2>Missions</h2>
      <Missions changeMissions={changeMissions} setChangeMissions={setChangeMissions}/>
    </div>
  )
}

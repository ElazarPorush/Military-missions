import AddMission from "./components/addMission";
import Missions from "./components/Missions";


export default function App() {
  return (
    <div>
      <h1>Military Operations Dashboard</h1>
      <AddMission />
      <h2>Missions</h2>
      <Missions />
    </div>
  )
}

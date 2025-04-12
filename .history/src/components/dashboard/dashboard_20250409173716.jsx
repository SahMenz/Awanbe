import DashboardNav from "./dashboardNav/dashboardNav"
import DashboardPanel from "./dashboardPanel/dashboardPanel"

function Dashboard() {
  return (
    <div className="bg-f5 d-flex flex-column">
      <div><DashboardNav /></div>
      <div><DashboardPanel /></div>
    </div>
  )
}

export default Dashboard
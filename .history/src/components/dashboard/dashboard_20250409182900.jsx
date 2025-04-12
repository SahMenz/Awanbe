import DashboardNav from "./dashboardNav/dashboardNav"
import DashboardPanel from "./dashboardPanel/dashboardPanel"

function Dashboard() {
  return (
    <div className="bg-f5 d-flex flex-column container-adjustment-special-case">
      <div><DashboardNav /></div>
      <div className="d-flex"><DashboardPanel /></div>
    </div>
  )
}

export default Dashboard
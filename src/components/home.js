import { Link } from "react-router-dom";



function Home() {

  
  return (

    <div>
      <h4>This is home</h4> 
      <div>
        <h5>View Customers</h5>
        <Link to="/view" className="btn btn-success">View List</Link>

      </div>
    </div>

  )
}

export default Home
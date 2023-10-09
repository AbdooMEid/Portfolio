import "./style/myProjects.css"
import {Link} from "react-router-dom";
import Ecommerce from "./image/e-commerce.png"
import Task from "./image/task.png"
import Expense from "./image/Expense.png"
import Weather from "./image/weather.png"
import Note from "./image/Note.png"

function Projects() {
  return (
    <div className="container-fluid my-projects">
      <h1>My Project</h1>
      <div className="container">
        <div className="project my-5 ms-5 ">
          <div className=" my-4 ">
            <div className="card" style={{width: "18rem", backgroundColor: "#242424",}}>
              <img src={Ecommerce} className="card-img-top" alt="E-commerce"/>
              <div className="card-body text-light">
                <h5 className="card-title text-light fw-bold">E-commerce</h5>
                <p>Api E-commerce Application</p>
                <Link to="https://github.com/AbdooMEid/E-commerce/tree/master" className="btn btn-warning">E-commerce
                  App</Link>
              </div>
            </div>
          </div>
          <div className=" my-4 ">
            <div className="card" style={{width: "18rem", backgroundColor: "#242424",}}>
              <img src={Task} className="card-img-top" alt="Task"/>
              <div className="card-body text-light">
                <h5 className="card-title  text-light">Task Management</h5>
                <p>Api Task Management Application</p>
                <Link to="https://github.com/AbdooMEid/Task" className="btn btn-warning">Task Management</Link>
              </div>
            </div>
          </div>
          <div className=" my-4 ">
            <div className="card" style={{width: "18rem", backgroundColor: "#242424",}}>
              <img src={Expense} className="card-img-top" alt="Expense Tracker"/>
              <div className="card-body text-light">
                <h5 className="card-title text-light">Expense Tracker</h5>
                <p>Expense Tracker React Application</p>
                <Link to="https://github.com/AbdooMEid/expense-tracker" className="btn btn-warning">Expense
                  Tracker</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project my-5 ms-5 ">
          <div className=" my-4 ">
            <div className="card" style={{width: "18rem", backgroundColor: "#242424",}}>
              <img src={Note} className="card-img-top" alt="Sticky Note"/>
              <div className="card-body text-light">
                <h5 className="card-title  text-light">Steak Note</h5>
                <p>Sticky Note Ejs Application</p>
                <Link to="https://github.com/AbdooMEid/Note" className="btn btn-warning">Sticky Note</Link>
              </div>
            </div>
          </div>
          <div className=" my-4 ">
            <div className="card" style={{width: "18rem", backgroundColor: "#242424",}}>
              <img src={Weather} className="card-img-top" alt="Weather"/>
              <div className="card-body text-light">
                <h5 className="card-title  text-light">Weather Application</h5>
                <p>Weather React Application</p>
                <Link to="https://github.com/AbdooMEid/weather-react" className="btn btn-warning">Weather</Link>
              </div>
            </div>
          </div>
          <div className=" my-4 ">
            <div className="card" style={{width: "18rem", backgroundColor: "#242424",}}>
              <img src={Task} className="card-img-top" alt="Todo List"/>
              <div className="card-body text-light">
                <h5 className="card-title text-light">Todo List</h5>
                <p>Todo List React Application</p>
                <Link to="https://github.com/AbdooMEid/Todo-List" className="btn btn-warning">Todo List</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
import "./style/about.css";
import Image from "./image/2021-09-01 071.jpg";
import {Link} from "react-router-dom";
import Resume from "./image/Abdelrahman_Mohammed Eid Mohammed_Resume-1.pdf"

function About() {
  return (
      <div className="container-fluid about">
        <h1 className="pt-5 text-center pb-5">About Me</h1>
        <div className="container">
          <div className="All-About">
            <div className="img">
              <img src={Image} alt="Abdelrahman"/>
            </div>
            <div className="about-more">
              <div>
                <h1>Hello I'M</h1> <h2> Abdelrahman Mohammed</h2>
              </div>
              <div className="info-personal w-100">
                <p className="name">
                  Name : <span>  Abdelrahman Mohammed Eid</span>
                </p>
                <p className="age">
                  Age : <span>  27</span>
                </p>
                <p className="address">
                  Address : <span>  Cairo,Giza</span>
                </p>
                <p className="eduction">
                  Eduction :
                  <span>
                    Bachelor of Information Systems
                  </span>
                </p>
                <p className="phone">
                  Phone Number : <span> 01020302740</span>
                </p>
                <p className="email">
                  E-mail : <span>  abdomeid66@gmail.com</span>
                </p>
              </div>
              <Link to={Resume} target="_blank" rel="" className="btn btn-warning p-3 my-5 text-black" download="Abdelrahman_Mohammed_Resume">Download CV</Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default About;

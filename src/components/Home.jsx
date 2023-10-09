import App from "./TypeWriter";
import Icons from "./Icons";
import "./style/home.css";
function Home() {
  return (
    <div className=" home">
      <div className="data">
        <App />
      </div>
      <div>
        <p>
          I develop websites on the front end and the back end using the skills
          available in the skills section below
        </p>
      </div>
      <div className="icons">
        <Icons />
      </div>
    </div>
  );
}

export default Home;

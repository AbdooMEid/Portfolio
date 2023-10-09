import { TypeAnimation } from "react-type-animation";
const App = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "I'm Abdelrahman Mohammed",
          1000,
          "I'm a Mern Stack Developer",
          1000,
          "Welcome To My Portfolio",
          1000,
        ]}
        speed={45}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
      />
    </div>
  );
};

export default App;

import React, { Component } from "react";
import "./style/skills.css";
import Slider from "react-slick";
import JsImg from "./image/5968292.png";
import HtmlImg from "./image/Html.png";
import CssImg from "./image/Css2.png";
import BootImg from "./image/bootstrap.png";
import ReactImg from "./image/React-Icon-Black.png";
import CPlusImg from "./image/C++.png";
import NodeImg from "./image/Nodejs.png";
import ExpressImg from "./image/express (1).png";
import MongoImg from "./image/Mongo.png";
import DockerImg from "./image/docker-logo-black-and-white.png";
import Aws from "./image/pngwing.com.png";
import Linux from "./image/linux.png";
import Redux from "./image/redixjs.png";
import TS from "./image/download.png";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      autoplay: true,
      infinite: true,
      centerPadding: "60px",
      slidesToScroll: 1,
      slidesToShow: 3,
      speed: 500,
      autoplaySpeed: 2000,
    };
    return (
      <div className="slide-skills">
        <Slider {...settings}>
          <div>
            <img
              src={JsImg}
              alt="JavaScript Skills"
              className="w-50 rounded-4"
            />
          </div>
          <div>
            <img src={HtmlImg} alt="Html Skills" className="w-50" />
          </div>
          <div>
            <img src={CssImg} alt="CSS Skills" className="w-50" />
          </div>
          <div>
            <img
              src={BootImg}
              alt="BootStrap Skills"
              className="w-50 bg-black rounded-4"
            />
          </div>
          <div>
            <img src={ReactImg} alt="ReactJS Skills" className="w-50 " />
          </div>
          <div>
            <img
              src={CPlusImg}
              alt="C++ Skills"
              className="w-50 rounded-circle"
            />
          </div>
          <div>
            <img
              src={NodeImg}
              alt="Nodejs Skills"
              className="w-50 rounded-circle"
            />
          </div>
          <div>
            <img src={ExpressImg} alt="Express Skills" className="w-50 " />
          </div>
          <div>
            <img
              src={MongoImg}
              alt="MongoDB Skills"
              className="w-50 bg-black rounded-4"
            />
          </div>
          <div>
            <img src={DockerImg} alt="Docker Skills" className="w-50" />
          </div>
          <div>
            <img src={Aws} alt="AWS Skills" className="w-75 " />
          </div>
          <div>
            <img src={Linux} alt="LINUX Skills" className="w-50 " />
          </div>
          <div>
            <img
              src={Redux}
              alt="Redux Skills"
              className="w-50 h-75 bg-black rounded-4"
            />
          </div>
          <div>
            <img
              src={TS}
              alt="TypeScript Skills"
              className="w-50 h-75 bg-black rounded-4"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

import { FaFacebook, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import "./style/icons.css";
import { Link } from "react-router-dom";
function Icons() {
  return (
    <div>
      <Link to={"https://www.facebook.com/abdo.elmagik.526"}>
        <FaFacebook className="fac" />
      </Link>
      <Link to={"https://www.linkedin.com/in/abdo-eid-78a6861a6/"}>
        <FaLinkedinIn className="lin" />
      </Link>
      <Link to={"https://github.com/AbdooMEid"}>
        <FaGithub className="git" />
      </Link>
      <Link to={"https://wa.me/1154142364"}>
        <FaWhatsapp className="wha" />
      </Link>
    </div>
  );
}

export default Icons;

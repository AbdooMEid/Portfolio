import "./style/footer.css"
import Icons from "./Icons";

function Footer() {
  return (
    <div className="footer  mt-5 py-3">
      <div className={"container footers"}>
        <h3 className={"d-block fw-bold"}>&copy; Copy Right, All rights reserved </h3>
        <Icons/>
      </div>
    </div>
  )
}

export default Footer
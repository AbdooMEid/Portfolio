import "./style/contact.css";

function Contact() {
  return (
    <div className={"container contact"}>
      <h1>Contact US</h1>
      <div className={"form-us"}>
        <form className="form-control bg-transparent border-0" action="/" method={"post"}>
          <input type="text" className="form-control bg-transparent  text-warning fw-bolder py-4"
                 placeholder={"Enter Your Name"}/>
          <input type="email" className="form-control bg-transparent  text-warning fw-bolder py-4"
                 placeholder={"Enter Your Email"}/>
          <input type="text" className="form-control bg-transparent  text-warning fw-bolder py-4"
                 placeholder={"Enter Your Phone Number"}/>
          <textarea maxLength={10000} rows={4}  className="form-control bg-transparent text-warning fw-bolder pt-4"
                 placeholder={"Enter Your Message"}></textarea>
          <button type={"submit"} className={"btn btn-warning my-5 w-100"} onClick={(e)=> e.preventDefault()}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
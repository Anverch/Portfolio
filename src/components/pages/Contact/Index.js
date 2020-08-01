import React, { Component, useState } from "react";
import "./style.css";



function Contact() {
  // 5 states, 1 for each variable
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [message, setMessage]=useState("");
  const [errMsg, setErrMsg]=useState("");
  const [sentMsg, setSentMsg]=useState("");

  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleEmailChange(e){
    setEmail(e.target.value)
  }

  function handleMessageChange(e){
    setMessage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

    if (!name || !email || !email.includes("@") || !message){
      setErrMsg("All information needs to be provided");
      return
    } 
    setErrMsg("");
    setSentMsg("Message has been sent");
    setName("");
    setEmail("");
    setMessage("");
  }

    return ( 
      <body>
        <div>
          <div className="container mt-5 pb-3">
            <div className="row justify-content-start">
              <div className="col-md-6 bg-light border p-lg-3">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="border-bottom pb-3">Contact</h3>
                  </div>
                  <div className="col-md-12">
                    {/*adding contact box*/}
                    {
                      errMsg && <div className="text-danger">{errMsg}</div>
                    }
                    {
                      sentMsg && <div className="text-success">{sentMsg}</div>
                    }
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input type="name" onChange={handleNameChange} value={name} className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" onChange={handleEmailChange} value={email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea onChange={handleMessageChange} value={message} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                        <br />
                        <button onClick={handleSubmit} className="btn-primary">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </body>
   );
}

export default Contact;

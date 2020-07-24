import React from "react";
import "./style.css";

function Contact() {
    return ( 
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
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   );
}

export default Contact;

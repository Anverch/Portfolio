import React from "react";
import "./style.css";

function Portfolio() {
    return ( 
      <body className="d-flex flex-column h-100">
        <div className="container mt-5 pb-5">
          <div className="row justify-content-start">
            <div className="col-md-8 bg-light border p-lg-3">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="border-bottom pb-3">Portfolio</h3>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 p-2">
                                <div className="card h-100">
                                    <img className="card-img-top port-image" src="./assets/images/boolean.png" alt="Card image cap" />
                                    <div className="card-body p-2 bg-teal">
                                      <h5 className="card-title m-0">Project Boolean</h5>
                                    </div>
                                    <div className="card-body p-2 bg-teal">
                                      <a href="https://github.com/Anverch/projectBoolean" target="_blank" className="card-link">Github</a>
                                      <a href="https://boolean-survey.herokuapp.com" target="_blank" className="card-link">View Demo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="card h-100">
                                    <img className="card-img-top port-image" src="./assets/images/DrinkingAtHome1.jpg" alt="Card image cap" />
                                    <div className="card-body p-2 bg-teal">
                                      <h5 className="card-title m-0">Drinking@Home</h5>
                                    </div>
                                    <div className="card-body p-2 bg-teal">
                                      <a href="https://github.com/Anverch/Drinking-At-Home" target="_blank" className="card-link">Github</a>
                                      <a href="https://anverch.github.io/Drinking-At-Home/" target="_blank" className="card-link">View Demo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="card h-100">
                                    <img className="card-img-top port-image" src="./assets/images/Burger.jpg" alt="Card image cap" />
                                    <div className="card-body p-2 bg-teal">
                                      <h5 className="card-title m-0">Eat-Da-Burger</h5>
                                    </div>
                                    <div className="card-body p-2 bg-teal">
                                      <a href="https://github.com/Anverch/Burger" target="_blank" className="card-link">Github</a>
                                      <a href="https://burger-ku.herokuapp.com" target="_blank" className="card-link">View Demo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="card">
                                    <img className="card-img-top port-image" src="./assets/images/NoteTaker.jpg" alt="Card image cap" />
                                    <div className="card-body p-2 bg-teal">
                                      <h5 className="card-title m-0">Note Taker</h5>
                                    </div>
                                    <div className="card-body p-2 bg-teal">
                                      <a href="https://github.com/Anverch/Note_Taker" target="_blank" className="card-link">Github</a>
                                      <a href="https://note-taker-ku.herokuapp.com" target="_blank" className="card-link">View Demo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="card h-100">
                                    <img className="card-img-top port-image" src="./assets/images/PwGenerator.jpg" alt="Card image cap" />
                                    <div className="card-body p-2 bg-teal">
                                      <h5 className="card-title m-0">Password Generator</h5>
                                    </div>
                                    <div className="card-body p-2 bg-teal">
                                      <a href="https://github.com/Anverch/Password_Generator" target="_blank" className="card-link">Github</a>
                                      <a href="https://anverch.github.io/Password_Generator/" target="_blank" className="card-link">View Demo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="card">
                                    <img className="card-img-top port-image" src="./assets/images/TemplateEngine.jpg" alt="Card image cap" />
                                    <div className="card-body p-2 bg-teal">
                                      <h5 className="card-title m-0">Template Engine</h5>
                                    </div>
                                    <div className="card-body p-2 bg-teal">
                                      <a href="https://github.com/Anverch/Template-Engine---Employee-Summary" target="_blank" className="card-link">Github</a>
                                      <a href="https://www.youtube.com/watch?v=aD9Tny0jhvQ&feature=youtu.be" target="_blank" className="card-link">View Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
    );
  }

export default Portfolio;
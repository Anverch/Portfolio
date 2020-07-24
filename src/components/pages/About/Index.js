import React from "react";
import "./style.css";
import Me from "./AlexSaiyan.jpg";

function About() {
  return ( 
    <body>
      <div className="container mt-5 pb-5">
        <div className="row justify-content-start">
          <div className="col-md-8 bg-light border p-lg-3">
            <div className="row">
              <div className="col-md-12">
                <h3 className="border-bottom pb-3">About Me</h3>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="media mt-3">
                    <img id="bio-image" src={Me} className="img-fluid p-2 rounded-circle" alt="Aleks Saiyan" />
                    <div className="media-body p-2">
                      <p>Aleks Saiyan was born in Yerevan, Armenia. He moved to the United States in 1998. He graduated with a Bachelor degree in Business with emphasis on Finance. He has been working in real estate industry since 2012. He has been working for an appraisal management
                        company for the past 5 years.</p>
                      <p><a target="_blank" href="https://github.com/Anverch">Github</a> | <a target="_blank" href="https://www.linkedin.com/in/aleksandr-saiyan-3b60445a/">LinkedIn</a> | <a target="_blank" href="./assets/images/ASG.pdf">Resume</a></p>
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

export default About;

import React from "react";
import ProjectCard from "../../ProjectCard";
import projects from "../../../consts/projects.json";
import "./style.css";
// import Link from "../../Link";

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
                                <ProjectCard 
                                  image={projects[0].image}
                                  title={projects[0].name}
                                  links={projects[0].links}
                                />
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
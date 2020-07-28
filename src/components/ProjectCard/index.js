import React from "react";
import Links from "../Link";

export default function ProjectCard(props){
    const {image, title, links} = props;
    console.log("this is links", links);
    return (
        <div className="card h-100">
        <img className="card-img-top port-image" src={require(`../../${image}`)} alt="" />
            <div className="card-body p-2 bg-teal">
                <h5 className="card-title m-0">{title}</h5>
            </div>
            <div className="card-body p-2 bg-teal">
                <Links 
                    links={links}
                    useSeparator={true}
                />
            </div>
        </div>
    )
}
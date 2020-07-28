import React from "react";
import Links from "../Link";

function Info(props) {
    const {title, imageUrl, text, links} = props;

    return (
    <div className="container mt-5 pb-5">
        <div className="row justify-content-start">
        <div className="col-md-8 bg-light border p-lg-3">
            <div className="row">
            <div className="col-md-12">
                <h3 className="border-bottom pb-3">{title}</h3>
            </div>
            <div className="col-md-12">
                <div className="row">
                <div className="media mt-3">
                    <img id="bio-image" src={imageUrl} className="img-fluid p-2 rounded-circle" alt="" />
                    <div className="media-body p-2">
                        <p>{text}</p>
                    <p>
                       <Links 
                            links={links}
                            useSeparator={true}
                       />
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Info;
import React from "react";

export default function Link(props) {
    const {links, useSeparator} = props;
    if (!links){
        return (<div></div>)
    }
    return (
        <span> {
            links.map((link, i)=> {
                return (<span>
                    <a target="_blank" href={link.url}>{link.label}</a> {
                        i !== links.length-1 && useSeparator && " | " 
                    } 
                    </span>)
            })
        }</span>
    )
}
import React from "react";

type ContentProps = {
    title: string;
    text: string;
    img: string;
};

function Content7(props: ContentProps) {
    return (
        <div className="overview-content3">
            <div className="overview-img2">
                <img
                className="ov-img "
                src={props.img}
                alt="content image"
                />
            </div>
            <div className="overview-desc2">
                <h4>{props.title}</h4>
                <p >{props.text}</p>
            </div>
        </div>
    )
};
export default Content7;

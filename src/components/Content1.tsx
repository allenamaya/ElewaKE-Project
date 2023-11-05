import React from "react";

type ContentProps = {
    title: string;
    text: string;
    img: string;
};

function Content1(props: ContentProps) {
    return (
        <div className="overview-content1">
            <div className="overview-img1">
                <img
                className="ov-img "
                src={props.img}
                alt="content image"
                />
            </div>
            <div className="overview-desc1">
                <h4>{props.title}</h4>
                <p >{props.text}</p>
            </div>
        </div>
    )
};
export default Content1;

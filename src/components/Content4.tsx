import React from "react";

// Define a type for the props that the Content component will receive
type ContentProps = {
    title: string;
    text: string;
    img: string;
};

function Content4(props: ContentProps) {
    return (
        <div className="overview-content1">
            <div className="overview-desc1">
                {/* Display the title and text of the prop */}
                <h4 className="title">{props.title}</h4>
                <p className="description">{props.text}</p>      
            </div>
            <div className="overview-img1">
                {/* Display the prop image */}
                <img
                className="ov-img "
                src={props.img}
                alt="content image"
                />
            </div>
        </div>
    )
};
export default Content4;

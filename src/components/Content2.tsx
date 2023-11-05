import React from "react";

// Define a type for the props that the Content component will receive
type ContentProps = {
    title: string;
    text: string;
    img: string;
};

function Content2(props: ContentProps) {
    return (
        <div className="overview-content2">
            <div className="overview-desc2">
                {/* Display the title and text of the prop */}
                <h2 className="title">{props.title}</h2>
                <p className="description">{props.text}</p>      
            </div>
            <div className="overview-img2">
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
export default Content2;

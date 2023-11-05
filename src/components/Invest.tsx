import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";
import Content1 from "./Content1";
import Content3 from "./Content3";
import Content5 from "./Content5";
import exp from "constants";
import Content6 from "./Content6";
import Content7 from "./Content7";
import Content8 from "./Content8";
import KeyFigures from "./KeyFigures";

function Invest(){
    return (
        <div>
            <Header />
            <Hero 
              image="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg"
              text='Trade, not aid'
              title="Southern innovations addressing global problems"  
            />
            <Content1 
                title="How we see it differently"
                text={`The global South is rapidly catching up with the "developed" world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond).`}
                img="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png"
            />
            <KeyFigures />
            <Content3 
                title="Elewa NV, a multi-stakeholder cooperation"
                text="At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities. Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group."
                img="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
            />
            <Content6
                title="The Elewa Creative Hub"
                text="Coming soon; The Elewa Creative Hub Lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner.

                Through partnerships with creative community, the Elewa Hub will organize vibrant activites that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation."
                img="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg"
             />
            <Content7 
                title="Investing in Elewa NV"
                text="From time to time, we offer investment opportunities (private equity & debt) to out community of investors. Interested to take part when this opportunity arrives?"
                img="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg"
            />
            <Content8 />
            <Footer />
        </div>
    )
}
export default Invest;
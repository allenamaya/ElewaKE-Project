import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Footer from "./Footer";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Content5 from "./Content5";

function SocialImpact(){
    return (
        <div>
            <Header />
            <Hero
                text='Scaling impact. Beyond the norm'
                title="Human and Environmental Impact through Social Enterprise"
                image="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg"
            />
            <Content1 
                img= "https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg"
                title= "(Social) business for the win"
                text= " With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself."
                
            />
            <Content2 
                title="A cooperative mindset"
                text= " Elewa has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves. Internally, but also within the larger communities in which we are active."
                img="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg"
            />
            <Content3 
                img= "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"
                title= "Beyond business"
                text= "We channel a good amount of our resources into giving back.Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers.  These projects don't necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term."
                
            />
             <Content4 
                title="Open knowledge"
                text= " What we learn, we share. Through community events, open knowledge repositories, regular teaching moments (everyone a teacher) and academic partnerships. We build for today, with a lens on tomorrow."
                img="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png"
            />
            <Content5 />
            <Footer />
        </div>
    )
};
export default SocialImpact;

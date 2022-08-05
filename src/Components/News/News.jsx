import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import projects from "../../data/data";
import "./style.css";

export default function News(props) {


  return (

   <Carousel autoPlay interval={6000} infiniteLoop thumbWidth={100} showIndicators={false} showStatus={false}>
   
    {projects.map((slider,index) =>

<div key={index} className="overlay">
  <h2 className="overlay_title">{slider.title}</h2>
  <p className="overlay_text">{slider.description}</p>
   <img className="overlay_img" src={slider.img} alt="" />
 </div>
    )}
     
      </Carousel> 
    
  );
}

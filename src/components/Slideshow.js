import React from "react";
import "./Slideshow.css"
import { useEffect, useRef, useState } from "react";
function Slideshow() {
  const images=["showroom_pics\\one.png", 
    "showroom_pics\\two.png",
    "showroom_pics\\three.png",
  "showroom_pics\\four.png"];

  const [index, setIndex]=useState(0);
  const delay=5000;
  const timeout=useRef(null);

  function resteTimeout(){
    if(timeout.current){
      clearTimeout(timeout.current);
    }
  }


  useEffect(() => {
    resteTimeout();
    timeout.current= setTimeout(() => setIndex((prevIndex) => 
    prevIndex===images.length-1?0:prevIndex+1
    ),
    delay
  );
  return ()=>{resteTimeout();};
  },[index]);


    return (
        <div className="slideshow-container">
          {/* <div className="slideshowDots slideshow-container"><div className="slideshowDot" ></div></div> */}
          <div className="slideshowDots">
            {
              images.map((_,idx) => (
                <div key={idx} className={`slideshowDot ${index===idx?"active": ""} slideshow-container`} onClick={()=>setIndex(idx)}></div>
              ))
            }
          </div>
          <div className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {images.map((image,index)=>(
              <img className="img-spec" src={image} key={index}></img>
              // <div className="slide" key={index} style={{ color: image }}></div>
            ))}
            
            </div>
            
            
        </div>
        // <div>Hello</div>

    );
}

export default Slideshow;
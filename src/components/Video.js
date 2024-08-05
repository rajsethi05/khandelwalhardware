import React, { useState } from "react";
import "./Video.css"
import "./Modal.css";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";



function Video(){
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
  
    const openModal = () => {
      setModal(!modal);
    };
  
    const spinner = () => {
      setVideoLoading(!videoLoading);
    };

    return(
        <>
        <div className="btn-div">
        <button className="video-button" onClick={openModal}>Visit Showroom
        <img src="icons\circle-play-regular.svg" alt="play" className="play-icon"></img>
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="video\vid_1.mp4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  >
                    {/* <video src="video\darasal.mp4" autoPlay controls></video> */}


                  </iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
        </button>
        </div>
        {/* <Mod/> */}

        
        </>
    )
}


export default Video
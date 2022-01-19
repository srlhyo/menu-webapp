import React from 'react';
import playButton from '../images/Play2.png';
import myVideo from '/videos/menu.mp4';

function Card(props) {

    // let isClicked = false;
    //const dish = document.getElementById('dish');\
    const playIcon = React.useRef(null);
    const video = React.useRef(null);

    function controlVideo(clickEvent) {    
 
        //dish.play();
        //isClicked = true
        let videoElement = clickEvent.target

        if (clickEvent.target.nodeName === 'IMG') {
            videoElement = clickEvent.target.parentNode.children[1]
        }

        if (videoElement.nodeName === 'VIDEO') {
            if (videoElement.paused) {
                videoElement.play()
                playIcon.current.classList.add("opacity-0")
                // video.current.classList.add("h-229px")
            } else {
                videoElement.load()
                console.log('video paused')
                playIcon.current.classList.remove("opacity-0")
                playIcon.current.classList.add("opacity-1")
                // video.current.classList.remove("h-229px")
            }
        }
    }
    
    return (
        <div className="relative font-segoe text-slate-200 w-11/12 mx-auto">
            {/* <div onClick={props.thumbneilClicked}>
                <img src={props.img} alt="salmon" />
                <img className="absolute top-3 right-3 w-8" src={playButton} alt="playbutton" />
            </div> */
            }
            <div className="w-full h-229px" id="clickDish" onClick={controlVideo}>
                <img ref={playIcon} className="absolute top-3 right-3 w-8 transition-all duration-500" src={playButton} alt="playbutton" />
                <video className="object-cover" ref={video} id="dish" width="100%" height="100%" muted poster={props.img}>
                    <source src={myVideo} type="video/mp4" />
                </video>
            </div>
            <h3 className="text-sm py-3">{props.title}</h3>
            <p className="text-xs pb-12">{props.description}</p>
        </div>
    )
}

export default Card;
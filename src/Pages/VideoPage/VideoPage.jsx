import React from 'react'
import vid from '../../Components/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
function VideoPage() {
  return (
    <>
        <div className="container_videoPage">
            <div className="contiainer2_videoPage">
                <div className="video_display_screen_videoPage">
                <video src={vid}
                className={"video_ShowVideo_videoPage"}
                controls
                autoPlay
                ></video>
                <div className='video_details_videoPage'>
                    <div className="video_btns_title_VideoPage_cont">
                        <p className="video_title_VedioPage"> Title</p>
                        <div className="views_date_btns_VideoPage">
                            <div className='views_videoPage'>
                                5 views  <div className="dot"></div> uploaded 1 year ago
                            </div>
                          <LikeWatchLaterSaveBtns/>
                        </div>
                    </div>
                      <div className='chanel_details_videoPage'>
                        <b className="chanel_logo_videoPage">
                            <p>C</p>
                        </b>
                        <p className='chanel_name_videoPage'> Chanel name</p>
                      </div>       
                      <div className='comments_VideoPage'>
                        <h2>
                            <u>Comments</u>
                        </h2>  
                      </div>          
                </div>
                </div>
                <div className="moreVideoBar">
                    More Video
                </div>
            </div>
        </div> 
    </>
  )
}

export default VideoPage

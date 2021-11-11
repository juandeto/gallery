import React from 'react'
import 'video-react/dist/video-react.css'
import { Player, LoadingSpinner, ControlBar } from 'video-react'
import {GoArrowUp, GoArrowDown} from 'react-icons/go'
import {AiFillEye} from 'react-icons/ai'

const Thumbnail = ({post}) => {
    console.log('POST: ', post)
    return(
        <article className="post__container">
                <figure className="post__image">
                   {post?.images?.[0].type.includes("video") ?
                   <Player
                   muted
                   autoPlay
                   >
                       <LoadingSpinner />
                        <source src={post?.images?.[0].link} />
                        <ControlBar disableCompletely={true}>
                        </ControlBar>
                    </Player>:
                   <img src={post?.images?.[0].link} alt="post" />}
                </figure>
                <div class="post__description">
                   <h4>{post?.title}</h4>
                   <div className="post__info">
                       <div className="post__ups">
                           <GoArrowUp />
                           <span>{post?.ups}</span>
                           <GoArrowDown />
                       </div>
                       <div className="post__watch">
                           <AiFillEye />
                       </div>
                   </div>
                </div>
        </article>
        )
}

export default Thumbnail;
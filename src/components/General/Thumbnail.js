import React from 'react'
import { useHistory } from 'react-router-dom'
import { Player, LoadingSpinner, ControlBar } from 'video-react'
import {GoArrowUp} from 'react-icons/go'
import {BsFillChatFill} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'
import '../../../node_modules/video-react/dist/video-react.css'

const Thumbnail = ({post, height}) => {
    const history = useHistory()

    const displayPost = (id) => {
        history.push(`/gallery/${id}`)
    }

    return(
        <article 
        style={{height: `${height}px`}}
        className="post__container" 
        onClick={() => displayPost(post.id)}>
                <figure
                className="post__image">
                   {post?.images?.[0].type.includes("video") || post?.type?.includes("video")?
                   <Player
                   muted
                   autoPlay
                   >
                       <LoadingSpinner />
                        <source src={post?.images?.[0].link || post.link} />
                        <ControlBar disableCompletely={true}>
                        </ControlBar>
                    </Player>:
                   <img 
                   loading="lazy"
                   src={post?.images?.[0].link || post.link} alt={post?.title} />}
                </figure>
                <div className="post__description">
                    <div className="post__title">
                        <span>{post?.title}</span>
                    </div>
                   <div className="post__info">
                       <div className="post__ups">
                           <GoArrowUp />
                           <span>{post?.ups}</span>
                       </div>
                       <div className="post__coments">
                           <BsFillChatFill />
                           <span>{post?.comment_count}</span>
                       </div>
                       <div className="post__watch">
                           <AiFillEye />
                           <span>{post?.views}</span>
                       </div>
                   </div>
                   <div style={{clear:"both"}}></div>
                </div>
        </article>
        )
}

export default Thumbnail;
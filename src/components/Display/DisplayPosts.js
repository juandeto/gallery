import React, {useEffect, useState} from 'react';
import {useHistory, withRouter} from 'react-router-dom'
import {useSelector} from 'react-redux';
import Header from '../General/Header'
import { Player, LoadingSpinner, ControlBar } from 'video-react'
import {GoArrowUp, GoArrowDown, GoHeart} from 'react-icons/go'
import {BsFillChatFill} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'
import '../../../node_modules/video-react/dist/video-react.css'
import '../../styles/Display.scss';

const DisplayPost = ({match}) => {
    const history = useHistory()
    const  { posts } = useSelector(state => state)
    const [post, setPost] = useState({})

    useEffect(() => {

        const  id =  match.params.id
        const filterPostsById = (id) => {
                const post = posts.filter(p => p?.id === id)
                return post[0]
        }
        const postToDisplay = filterPostsById(id)
        if(!postToDisplay){
            history.push('/')
        }
        setPost(postToDisplay)
    },[history, match.params.id, posts])
    
    return (
        <>
        <Header goBack={true}/>
        <main className="display__container">
            <div className="display__gallery">
            <aside className="display__sidebar">
                <div className="display__info">
                    <div className="display__watch">
                            <AiFillEye />
                            <span>{post?.score}</span>
                        </div>
                        <div className="display__ups">
                            <GoArrowUp />
                            <span>{post?.ups}</span>
                        </div>
                        <div className="display__ups">
                            <GoArrowDown />
                            <span>{post?.downs}</span>
                        </div>
                        <div className="display__coments">
                            <BsFillChatFill />
                            <span>{post?.comment_count}</span>
                        </div>
                        <div className="display__watch">
                            <GoHeart />
                            <span>{post?.views}</span>
                        </div>
                    </div>
                </aside>
                <section className="display__post">
                    <header className="display__header" >
                        <h3>{post?.title}</h3>
                    </header>
                    <div className="display__imgContainer">
                        <figure className="display__media">
                {post?.images?.[0].type.includes("video") || post?.type?.includes("video")?
                    <Player
                    muted
                    autoPlay
                    >
                        <LoadingSpinner />
                            <source src={post?.images?.[0]?.link || post.link} />
                            <ControlBar disableCompletely={false}>
                            </ControlBar>
                        </Player>:
                        <div className="display__images">
                            {post?.images?.map((img,i)=>(
                            <img 
                            src={img?.link || post?.link} 
                            key={i} alt={post?.title || "post"} />
                            ))
                            }
                        </div>
                    }
                    </figure>
                    </div>
                </section>
                <div className="display__tags">
                    <h3>#TAGS</h3>
                    {
                        post?.tags?.map((tag, i) => (
                            <span 
                            className="display__tag" >#{tag.display_name}</span>
                        ))
                    }
                </div>
            </div>
        </main>
        </>
    )
}

export default withRouter(DisplayPost);
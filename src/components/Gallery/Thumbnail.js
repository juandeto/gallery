import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import img from '/home/juan/gallery-app/src/assets/profile.jpeg'

const Thumbnail = () => {
    return(
        <article className="post__container">
            <a href="" class="post">
                <figure className="post__image">
                    <img src={img} alt="" />
                </figure>
                <span class="post__overlay">
                    <p>
                        <span class="post__likes">150</span>
                        <span class="post__comments">10</span>
                    </p>
                </span>
            </a>
            
            {/* <div className="post__info">
                <p>My image</p>
            </div> */}
        </article>
        )
}

export default Thumbnail;
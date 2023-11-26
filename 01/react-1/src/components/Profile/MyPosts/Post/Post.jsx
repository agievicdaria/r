import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" />
        {props.message};
      </div>
} 

export default Post;
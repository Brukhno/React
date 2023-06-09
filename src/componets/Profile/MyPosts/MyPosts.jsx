import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
 
	let postsElement = props.posts.map(p=><Post massage={p.message} like={p.likeCount} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
		<div>
        <button>Add post</button>
		</div>
      </div>
      <div className={s.posts}>
       { postsElement}
      </div>
    </div>
  );
};
export default MyPosts;

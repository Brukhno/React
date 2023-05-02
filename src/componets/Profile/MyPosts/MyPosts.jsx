import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
	let posts=[
		{id: 1, message:"Hi , how are yuo?" , likeCount:12 },
		{id: 2, message:"Hi , how are yuo?" , likeCount:15 }
	]
	let postsElement = posts.map(p=><Post massage={p.message} like={p.likeCount} />)

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

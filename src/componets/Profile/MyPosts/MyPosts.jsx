import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts =()=>{
    return <div>
	My posts
	<div>
		<textarea></textarea>
		<button>Add post</button>
		</div>
		<div className={s.posts}>
		<Post massage='Hi , how are yuo?' like='15'/>
		<Post massage='Its my first post' like='20'/>
		</div>
		</div>
}
    export default MyPosts
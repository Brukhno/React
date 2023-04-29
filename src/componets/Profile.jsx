import React from "react";
import s from './Profile.module.css'

const Profile =()=>{
    return<div className={s.content}>
	<div>
		<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYzBYD8kdjHe9VnspYlCQ9jfwz4KbBZkBNA&usqp=CAU' alt='no img'/>
		</div>
		<div>ava</div>
		<div>posts<div/>
		<div className={s.posts}>new posts</div>
		<div>
			<div className={s.item}>post1</div>
			<div className={s.item}>post2</div>
		</div>
		</div>
	</div>
}
    export default Profile
import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYzBYD8kdjHe9VnspYlCQ9jfwz4KbBZkBNA&usqp=CAU"
          alt="no img"
        />
      </div>
      <div className={s.discriptionBlock}>ava</div>
    </div>
  );
};
export default ProfileInfo;

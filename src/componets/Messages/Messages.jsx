import React from "react";
import s from './Messages.module.css'
const Messages = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog +' '+ s.active}>Dima</div>
        <div className={s.dialog}>Inga</div>
        <div className={s.dialog}>Valera</div>
        <div className={s.dialog}>Vadim</div>
        <div className={s.dialog}>Olga</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
};
export default Messages;

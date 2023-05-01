import React from "react";
import { NavLink } from "react-router-dom";
import s from './Messages.module.css'

const Messages = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <NavLink to="/dialogs/1" className={s.dialog +' '+ s.active}>Dima</NavLink>
        <NavLink to="/dialogs/2" className={s.dialog}>Inga</NavLink>
        <NavLink to="/dialogs/3" className={s.dialog}>Valera</NavLink>
        <NavLink to="/dialogs/4" className={s.dialog}>Vadim</NavLink>
        <NavLink to="/dialogs/5" className={s.dialog}>Olga</NavLink>
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

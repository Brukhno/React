import React from "react";
import { NavLink } from "react-router-dom";
import s from './Messages.module.css'

const DialogItem= (props)=>{

  let path="/dialogs/" + props.id 

  return   <div className={s.dialog +' '+ s.active}>
  <NavLink to= {path}>{props.name}</NavLink>
  </div>
}

const Message =(props)=>{
return <div className={s.message}>{props.message}</div>
}

const Messages = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Vadim" id="2" />
        <DialogItem name="Valera" id="3" />
        <DialogItem name="Olga" id="4" />
        <DialogItem name="Inga" id="5" />
        <DialogItem name="Masha" id="6" />
      </div>
      <div className={s.messages}>
      <Message message="Hi, friend!!!"/>  
      <Message message="Yo!"/>
      <Message message="Hello world!!!"/>
      <Message message="Hi, gangsta!!!"/>
      <Message message="Hi, little boy!"/>
      </div>
    </div>
  );
};
export default Messages;

import React from "react";
import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs/Dialogs";


const Messages = (props) => {
  let messages=[
    {id:1 , message:"Hi, friend!!!"},
    {id:2 , message: "Hello world!!!"},
    {id:3 , message:"Yo!"},
    {id:4 , message:"Hi, gangsta!!!"},
    {id:4 , message:"Hi, little girl!!"},
    {id:5 , message:"Hi, little boy!!"}
  ]
  
  let dialogs=[
    {id:1 , name:"Dima"},
    {id:2 , name: "Vadim"},
    {id:3 , name:"Valera"},
    {id:4 , name:"Olga"},
    {id:4 , name:"Inga"},
    {id:5 , name:"Masha"}
  ]
  
  
  let dialogsElement = dialogs.map(d=><DialogItem name={d.name}  id={d.id} />)

  let messagesElement =messages.map(m=> <Dialogs message={m.message}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
      {dialogsElement}
      </div>
      <div className={s.messages}>
      {messagesElement}
      </div>
    </div>
  );
};
export default Messages;


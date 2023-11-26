import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/1" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink path={path}>{props.name}</NavLink>
         </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Petro" id="1"/>
                <DialogItem name="Artem" id="2"/>
                <DialogItem name="Olena" id="3"/>
                <DialogItem name="Ivan" id="4"/>
                <DialogItem name="Iryna" id="5"/>
                <DialogItem name="Natalya" id="6"/>
            </div>

            <div className={s.messages}>
                <Message message ="Hi!"/>
                <Message message ="How are you?"/>
                <Message message ="By!"/>
            </div>
        </div>
    )
}

export default Dialogs;
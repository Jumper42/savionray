import React from "react";
import { motion } from "framer-motion";
const WheelItem = props => {

    const onClickHandler = () => {
        props.onClick(props.id)
    }

    return (
        <motion.path id={props.id} className={props.className} d={props.d} onClick={onClickHandler} whileHover={{ scale: 0.99 }} />
    );
}

export default WheelItem;
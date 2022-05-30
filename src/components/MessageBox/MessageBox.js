import 'animate.css';
import './MessageBox.css';
import { motion } from 'framer-motion';

const MessageBox = props => {

    return (
        <motion.div id="container"
            animate={{ x: -180, y: -5, scale: 0.9, boxShadow: "2px 8px 15px 4px rgba(0, 0, 0, 0.2)",}}
            transition={{ default: { duration: 1 }, ease: "easeOut", }}>
            <div id="content">
                <span>{props.text}</span>
            </div>
            <div id="title">
                <span>{props.title}</span>
            </div>
            <div id="id">
                <span>{props.id}</span>
            </div>
        </motion.div>
    );
}

export default MessageBox;


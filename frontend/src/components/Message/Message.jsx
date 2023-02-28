import { useState } from "react";
import "./Message.scss";

const Message = (props) => {
  const [message] = useState(JSON.parse(props.message));
    return <div className="Message">{message.body}</div>;
}

export default Message;
import "./ChatInput.scss";

const ChatInput = (props) =>{
    return (
      <div className="ChatInput">
        <input onKeyDown={props.send} />
      </div>
    );
}

export default ChatInput;
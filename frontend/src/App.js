import './App.css';
import { connect, sendMsg } from "./api"
import Header from './components/Header';
import ChatHistory from './components/ChatHistory'
import ChatInput from './components/ChatInput'
import { useEffect, useState } from "react";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  connect();

  useEffect(()=>{
    connect((msg) => {
      console.log("New Message");
      setChatHistory([...chatHistory, msg]);
      console.log(chatHistory);
    });
  })

  const send = (event) => {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }
  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
}

export default App;

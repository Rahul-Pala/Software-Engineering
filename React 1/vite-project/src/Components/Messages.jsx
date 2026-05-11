import { useState } from "react";
import MessageList from "./MessageList";

function Messages() {

  const [messages, setMessages] = useState([]);

  const [inputText, setInputText] = useState("");

  function addMessage() {

    const updatedMessages = [
      ...messages,
      inputText
    ];

    setMessages(updatedMessages);

    setInputText("");
  }

  return (
    <div>

      <h1>Messages App</h1>

      <MessageList
        messages={messages}
        inputText={inputText}
        setInputText={setInputText}
        addMessage={addMessage}
      />

    </div>
  );
}

export default Messages;
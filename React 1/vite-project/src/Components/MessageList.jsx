function MessageList(props) {

  return (
    <div>

      <input
        type="text"
        value={props.inputText}
        onChange={(e) =>
          props.setInputText(e.target.value)
        }
      />

      <button onClick={props.addMessage}>
        Add Message
      </button>

      <ul>
        {props.messages.map((message, index) => (
          <li key={index}>
            {message}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default MessageList;
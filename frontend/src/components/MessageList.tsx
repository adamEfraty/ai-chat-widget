import {useState} from "react";
import Message from "./Message";

function MessageList() {
    const [messages, setMessages] = useState<any[]>([]);
    return (
        <div className="message-list">
            {messages.map((message, idx) => (
                <Message key={idx} message={message} />
                ))}
        </div>
    )
}
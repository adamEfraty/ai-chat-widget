function Message({ message }: {message: any}) {
    return (
        <div>
            <span>{message.content}</span>
            <i>{message.time}</i>
        </div>
    )
}

export default Message;
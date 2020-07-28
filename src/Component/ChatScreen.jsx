import React from 'react'
import "./ChatScreen.css"
import {Avatar} from '@material-ui/core'
const ChatScreen = () => {
    
    const [input, setInput] = React.useState("")
    const [messages, setMessages] = React.useState([
        {
            name: 'alen',
            image: "https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg?w=800&quality=85",
            message: "whats up"
        },

        {
            name: 'alen',
            image: "https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg?w=800&quality=85",
            message: "what is going "
        },
        {
            message: "its fine here  "
        },

    ])
    return (
        <div className="chatScreen">
<p className="chatScreen__timeStamp">YOU MATCHED WITH ELLEN ON 10/08/20 </p>
{messages.map(message =>(
    message.name?(
    <div className="chatScreen__message">
        <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
        <p className="chatScreen__text">{message.message}</p>
    </div>
    ):(
    <div className="chatScreen__message">
        <p className="chatScreen__textUser">{message.message}</p>
    </div>

    )
))}
<form className="chatScreen__input">
    
<input type="text"placeholder="type a message"
className="chatScreen__inputField" 
value={input}  onChange={(e)=>{
    setInput(e.target.value)
}}
/>
<button onClick={(e)=>{
    e.preventDefault();
    setMessages([...messages,{message:input}])
    setInput('');
}} className="chatScreen__inputButton">SEND</button>
    
</form>
        </div>
    )
}

export default ChatScreen

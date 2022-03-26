import ChatHeader from './ChatHeader'
import AllSelectedDisplay from './AllSelectedDisplay'
import ChatDisplay from './ChatDisplay'


const ChatContainer = () => {
    return ( 
        <div className="chat-container">
            <ChatHeader/>

            <div>
                <button className="option">Selected</button>
                <button className="option">Chat</button>
            </div>

            <AllSelectedDisplay/>

            <ChatDisplay/>
        </div>
    )
}
export default ChatContainer
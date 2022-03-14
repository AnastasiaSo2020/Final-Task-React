import { useState } from "react"
function Chat() {

  const [messages, setMessages] = useState([{ user: 'Robby (bot)', time: new Date(), message: 'Hello, my name is Robby. Do you want to make your first order?' }])

  function SubmitMessage(e) {
    e.preventDefault();
    let newMessage = { user: e.target.nameChat.value, time: new Date(), message: e.target.comment.value }
    let allMessages = [newMessage, ...messages]
    setMessages(allMessages)
    setTimeout(() => BotAsnwer(allMessages), 1000)
  }

  function BotAsnwer(allMessages) {
    let lastMessage = allMessages[0].message
    let answer = ''
    switch (lastMessage) {
      case "Yes": answer = "Please choose between Workshops and Pasta Products :)"; break
      case "Workshops": answer = "Great choice, please click Workshops above :)"; break
      case "Pasta Products": answer = "You will not regret about, please click Shop above :)"; break
      case "No": answer = "Then have a nice day and see you next time! :)"; break
      default: answer = "Please rephrase your request :)"; break
    }

    let newMessage = { user: 'Robby (bot)', time: new Date(), message: answer }
    setMessages([newMessage, ...allMessages])
  }

  return (
    <div className="container">
      <div>
        <h3 className="chatSubTitleAppearance">Chat</h3>
      </div>
      <div className="chatArea">
        <div className="firstPartofChat">
          <div id='messageTemplate' className="chatBox">
            {messages.map((item, index) => (
              <div key={index} className="chatMessage">
                <div className="nameDateTime">
                  <div className="personName"> <b>{item.user}</b></div>
                  <span className="chatTime"><b>{item.time.toTimeString()}</b></span>
                </div>
                <div className="userMessage">{item.message}</div>
                <hr />
              </div>
            ))
            }
          </div>
        </div>
        <form onSubmit={SubmitMessage}>
          <div className="row secondPartofChat">
            <hr />
            <div className="col-9">
              <label htmlFor="userName">Username:</label> <br />
              <input required type="some-name" id="nameChat" /> <br />
              <label htmlFor="comment">Message:</label><br />
              <textarea required id="comment"></textarea>
            </div>
            <div className="col-3 btnBox">
              <button className="btn btn-warning responsive-width">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Chat
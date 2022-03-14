function Chat() {

  return (
    <div className="container">
      <div>
        <h3 className="chatSubTitleAppearance">Chat</h3>
      </div>
      <div className="chatArea">
        <div className="firstPartofChat">
          <div id='messageTemplate' className="chatBox">
            <div className="chatMessage">
              <div className="nameDateTime">
                <div className="personName"> <b>Matias</b></div>
                <span className="chatTime"><b>25.11.2021 18:30</b></span>
              </div>
              <div className="userMessage">Hi, Monica! How are you?</div>
            </div>
          </div>
          <hr />
        </div>
        <div className="row secondPartofChat">
          <hr />
          <div className="col-9">
            <label for="userName">Username:</label> <br />
            <input type="some-name" id="nameChat" /> <br />
            <label for="comment">Message:</label><br />
            <textarea id="comment"></textarea>
          </div>
          <div className="col-3 btnBox">
            <button onclick="onChatSent()" className="btn btn-primary responsive-width">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat
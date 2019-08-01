import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddChatRoom from "../addchatroom/AddChatRoom";
import EditChatRoom from "../editchatroom/EditChatRoom";

class ChatRoomIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  changeEditing = whichNumber => {
    this.setState({ editing: whichNumber });
  };

  resetEdit = () => {
    this.setState({ editing: false });
  };

  deleteChatRoom = idOfChatRoom => {
    axios
      .delete(`http://localhost:5000/api/chatroom/${idOfChatRoom}`)
      .then(() => {
        this.props.getData();
      })
      .catch(err => {
        console.lpog(err);
      });
  };

  showChatRooms = () => {
    if (!this.props.theUser) {
      this.props.history.push("/");
      return;
    }

    const myChatRooms = this.props.allTheChatRooms.filter(eachCR => {
      return eachCR.owner === this.props.theUser._id;
    });

    return myChatRooms.map((chatroom, index) => {
      if (this.state.editing !== index) {
        return (
          <div key={chatroom._id}>
            <Link to={`/chatrooms/${chatroom._id}`}>
              <h3>{chatroom.title}</h3>
            </Link>
            <p style={{ maxWidth: "400px" }}>{chatroom.description}</p>
            <button
              onClick={() => {
                this.changeEditing(index);
              }}
            >
              Edit Chat Room
            </button>
            <button
              onClick={() => {
                this.deleteChatRoom(chatroom._id);
              }}
            >
              Delete Chat Room
            </button>
          </div>
        );
      } else {
        return (
          <EditChatRoom
            resetEditingSituation={this.resetEdit}
            theChatRoom={chatroom}
            getAllTheChatRoomsInAppJs={this.props.getData}
          />
        );
      }
    });
  };

  render() {
    if (this.props.ready)
      return (
        <div>
          <div style={{ width: "60%", float: "left" }}>
            {this.showChatRooms()}
          </div>
          <div style={{ width: "40%", float: "right" }}>
            <AddChatRoom getData={this.props.getData} />
          </div>
        </div>
      );
    else return <h3>Loading...</h3>;
  }
}

export default ChatRoomIndex;

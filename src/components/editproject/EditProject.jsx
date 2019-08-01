import React, { Component } from 'react';
import axios from 'axios';


class EditChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.theChatRoom.title,
      description: this.props.theChatRoom.description
    }
  }

  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;

    event.preventDefault();

    axios.post(`http://localhost:5000/api/chatrooms/update/${this.props.theChatRoom._id}`,
    { theTitle: title, theDescription: description })
    .then(() => {
      this.props.getAllTheChatRoomsInAppJs();
      this.props.resetEditingSituation();
    })
    .catch(error => console.log(error))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }


  render() {
    return (
      <div>
        <form onSubmit= {this.handleFormSubmit}>
          <div>
            <input style= {{padding: '5px', fontSize: '20px', margin: '5px'}} type='text' name='title' value= {this.state.title} onChange= {this.handleChange}/>
          </div>
            <input name='description' value= {this.state.description} onChange= {this.handleChange}/>
            
            <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}


export default EditChatRoom;
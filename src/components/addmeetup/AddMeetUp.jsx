import React, { Component } from "react";
import axios from "axios";

class AddMeetUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      newDescription: "",
      newType: "",
      newStreetAddress: "",
      newCity: "",
      newState: "",
      newCountry: "",
      newTime: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:5000/api/meetup",
        {
          theTitle: this.state.newTitle,
          theDescription: this.state.newDescription,
          theType: this.state.newType,
          theStreetAddress: this.state.newStreetAddress,
          theCity: this.state.newCity,
          theState: this.state.newState,
          theCountry: this.state.newCountry,
          theTime: this.state.newTime
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.getData();
        // This function updates the list in MeetUpIndex.js
        this.setState({
          newTitle: "",
          newDescription: "",
          newType: "",
          newStreetAddress: "",
          newCity: "",
          newState: "",
          newCountry: "",
          newTime: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="add-meetup">
        <form inSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="newTitle"
            value={this.state.newTitle}
            onChange={e => this.handleChange(e)}
          />
          <label>Description:</label>
          <textarea
            name="newDescription"
            value={this.state.newDescription}
            onChange={e => this.handleChange(e)}
          />
          <label>Type:</label>
          <input
            type="text"
            name="newType"
            value={this.state.newType}
            onChange={e => this.handleChange(e)}
          />
          <label>Street Address:</label>
          <input
            type="text"
            name="newStreetAddress:"
            value={this.state.newStreetAddress}
            onChange={e => this.handleChange(e)}
          />
          <label>City:</label>
          <input
            type="text"
            name="newCity"
            value={this.state.newCity}
            onChange={e => this.handleChange(e)}
          />
          <label>State:</label>
          <input
            type="text"
            name="newState"
            value={this.state.newState}
            onChange={e => this.handleChange(e)}
          />
          <label>Country:</label>
          <input
            type="text"
            name="newCountry"
            value={this.state.newCountry}
            onChange={e => this.handleChange(e)}
          />
          <label>Time:</label>
          <input
            type="text"
            name="newTime"
            value={this.state.newTime}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddMeetUp;

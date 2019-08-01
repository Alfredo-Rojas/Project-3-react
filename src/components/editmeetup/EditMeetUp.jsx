import React, { Component } from "react";
import axios from "axios";

class EditMeetUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.theMeetUp.title,
      description: this.props.theMeetUp.description,
      type: this.props.theMeetUp.type,
      streetAddress: this.props.theMeetUp.streetAddress,
      city: this.props.theMeetUp.city,
      dState: this.props.theMeetUp.dState,
      country: this.props.theMeetUp.country,
      time: this.props.theMeetUp.time
    };
  }

  handleFormSubmit = event => {
    const title = this.state.title;
    const description = this.state.description;
    const type = this.state.type;
    const streetAddress = this.state.streetAddress;
    const city = this.state.city;
    const state = this.state.dState;
    const country = this.state.country;
    const time = this.state.time;

    event.preventDefault();

    axios
      .post(
        `http://localhost:5000/api/chatrooms/update/${
          this.props.theMeetUp._id
        }`,
        {
          theTitle: title,
          theDescription: description,
          theType: type,
          theStreetAddress: streetAddress,
          theCity: city,
          theState: state,
          theCountry: country,
          theTime: time
        }
      )
      .then(() => {
        this.props.getAllTheMeetUpsInAppJs();
        this.props.resetEditingSituation();
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <input
              style={{ padding: "5px", fontSize: "20px", margin: "5px" }}
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
          />
          <input
            name="streetAddress"
            value={this.state.streetAddress}
            onChange={this.handleChange}
          />
          <input
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <input
            name="state"
            value={this.state.state}
            onChange={this.handleChange}
          />
          <input
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          />
          <input
            name="time"
            value={this.state.time}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditMeetUp;

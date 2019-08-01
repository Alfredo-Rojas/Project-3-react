import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddMeetUp from "../addmeetup/AddMeetUp";
import EditMeetUp from "../editmeetup/EditMeetUp";

class MeetUpIndex extends Component {
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

  deleteMeetUp = idOfMeetUp => {
    axios
      .delete(`http://localhost:5000/api/meetup/${idOfMeetUp}`)
      .then(() => {
        this.props.getData();
      })
      .catch(err => {
        console.lpog(err);
      });
  };

  showMeetUps = () => {
    if (!this.props.theUser) {
      this.props.history.push("/");
      return;
    }

    const myMeetUps = this.props.allTheMeetUps.filter(eachMU => {
      return eachMU.owner === this.props.theUser._id;
    });
    //need add more meetup fields
    return myMeetUps.map((meetup, index) => {
      if (this.state.editing !== index) {
        return (
          <div key={meetup._id}>
            <Link to={`/meetups/${meetup._id}`}>
              <h3>{meetup.title}</h3>
            </Link>
            <p style={{ maxWidth: "400px" }}>{meetup.description}</p>
            <button
              onClick={() => {
                this.changeEditing(index);
              }}
            >
              Edit Meet Up
            </button>
            <button
              onClick={() => {
                this.deleteMeetUp(meetup._id);
              }}
            >
              Delete Meet Up
            </button>
          </div>
        );
      } else {
        return (
          <EditMeetUp
            resetEditingSituation={this.resetEdit}
            theMeetUp={meetup}
            getAllTheMeetUpsInAppJs={this.props.getData}
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
            {this.showMeetUps()}
          </div>
          <div style={{ width: "40%", float: "right" }}>
            <AddMeetUp getData={this.props.getData} />
          </div>
        </div>
      );
    else return <h3>Loading...</h3>;
  }
}

export default MeetUpIndex;

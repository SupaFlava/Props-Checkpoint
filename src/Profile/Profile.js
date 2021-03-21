import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div
      style={{
        marginTop: "-50px",
        textAlign: "center",
        backgroundColor: "#725AC1",
        height: "100vh",
      }}
    >
      <h1 style={{ fontStyle: "bold", color: "#F7ECE1", marginTop: "50px" }}>
        Greetings just call me {props.name}!
      </h1>
      <h2 style={{ color: "#F7ECE1", margin: "50px" }}>
        About me: {props.bio}.
      </h2>

      <h2 style={{ color: "#F7ECE1", margin: "50px" }}>
        What i do ?? {props.profession}.
      </h2>
      <div>
        <img
          style={{
            marginTop: "50px",
            height: "250px",
            width: "250px",
            borderRadius: "50%",
          }}
          src={props.src}
          alt=""
        />
      </div>
      <br />
      <button
        style={{
          backgroundColor: "#8D86C9",
          color: "#F7ECE1",
          borderRadius: "5px",
          border: "none",
          padding: "10px",
        }}
        onClick={() => props.handleName()}
      >
        Click me!
      </button>
    </div>
  );
}
export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    src: PropTypes.string,
  }),
  handleName: PropTypes.func,
};

Profile.defaultProps = {
  name: "Undifiend",
  bio: "Lorem Ipsem ???",
  profession: "N/A",
};

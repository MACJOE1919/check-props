import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
const Component = (props) => {
  return (
    <div>
      {props.children}
      <div
        style={{
          fontSize: "20px",
          fontFamily: '"Comic sans Ms", cursive , sans-serif',
          color: "white",
          fontStyle: "italic",
          textAlign: "center",
          borderStyle: "dashed",
          borderRadius: "5%",
          borderWidth: "5px",
          marginTop: "230px",
        }}
      >
        <h2>FullName : {props.FullName}</h2>
        <h2>Profession : {props.Bio.Profession}</h2>
        <h2>Goals : {props.Bio.Goals}</h2>
        <h2>Clubs : {props.Bio.Clubs}</h2>
        <h2>Languages : {props.Bio.Languages}</h2>
        <Button
          variant="dark"
          style={{ marginRight: "20px" }}
          onClick={() => props.handleName(props.FullName)}
        >
          Get the Name of the Profile
        </Button>
      </div>
    </div>
  );
};

export default Component;
/********* PropTypes */
Component.propTypes = {
  FullName: PropTypes.string,
  Bio: PropTypes.shape({
    Profession: PropTypes.string,
    Clubs: PropTypes.arrayOf(PropTypes.string),
    Goals: PropTypes.number,
    Languages: PropTypes.string,
  }),

  handleName: PropTypes.func,
};

/********* Default props */
Component.defaultProps = {
  FullName: "No FullName",
  Bio: "No Bio",
};

import React from "react";
import { Divider } from "semantic-ui-react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./DividerTextGroup.scss";

const DividerTextGroup = ({ name }) => {
  return (
    <div className="divider-class">
      <p className="text-muted">{name}</p>
      <Divider className="divider" />
    </div>
  );
};

DividerTextGroup.propTypes = {
  name: PropTypes.string.isRequired
};

export default DividerTextGroup;

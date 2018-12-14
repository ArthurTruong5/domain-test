import React from "react";
import { Divider } from "semantic-ui-react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./BusinessCardTextGroup.scss";

const BusinessCardTextGroup = ({ name }) => {
  return (
    <div className="divider-class">
      <p className="text-muted-a">{name}</p>
      <Divider className="divider" />
    </div>
  );
};

BusinessCardTextGroup.propTypes = {
  name: PropTypes.string.isRequired
};

export default BusinessCardTextGroup;

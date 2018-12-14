import React from "react";
import { Divider } from "semantic-ui-react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./BusinessCardTextGroup.scss";

const CardPreviewTextGroup = ({ name }) => {
  return (
    <div className="card-fill">
      <h4 className="card-text">{name}:</h4>
      <div className="card-divider">
        <hr />
      </div>
    </div>
  );
};

CardPreviewTextGroup.propTypes = {
  name: PropTypes.string.isRequired
};

export default CardPreviewTextGroup;

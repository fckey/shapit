import React, {PropTypes} from 'react';
import {Link} from 'react-router'

const TimelineRow = ({tlRow}) => {
  return (
    <div className="list-group container-fluid col-xs-12 col-sm-6 col-md-3">
      <li className="list-group-item"><img src={tlRow.img} className="img-rounded center-block"/></li>
      <li className="list-group-item"><h3>Yor Status: {tlRow.result}</h3></li>
      <li className="list-group-item"><p/>
      <h4>Memo: {tlRow.memo}</h4>
      <p/></li>
    </div>
  );
};

TimelineRow.propTypes = {
  tlRow: PropTypes.object.isRequired
};

export default TimelineRow;

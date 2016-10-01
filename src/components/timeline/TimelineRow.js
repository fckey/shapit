import React, {PropTypes} from 'react';
import {Link} from 'react-router'

const TimelineRow = ({tlRow}) => {
  return (
    <div className="content">
      <img src={tlRow.img} />
      <h3>Yor Status: {tlRow.result}</h3>
      <p/>
      <h4>Memo: {tlRow.memo}</h4>
      <p/>
<h4>-------------------------------</h4>
    </div>
  );
};

TimelineRow.propTypes = {
  tlRow: PropTypes.object.isRequired
};

export default TimelineRow;

import React, {PropTypes} from 'react';
import TimelineRow from './TimelineRow'

const TimelineList = ({tlRows}) => {

  return (
    <div className="timelineList">
      {tlRows.map(tlRow =>
        <TimelineRow key={tlRow.id} tlRow={tlRow}/>
      )}
    </div>
  );
};

TimelineList.propTypes = {
  tlRows: PropTypes.array.isRequired
};

export default TimelineList;

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as timelineActions from '../../actions/timelineActions'
import TimelineList from './TimelineList';
import {browserHistory} from 'react-router';

class TimelinePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddTimelinePage = this.redirectToAddTimelinePage.bind(this);
  }

  redirectToAddTimelinePage() {
    browserHistory.push('/newItem');
  }

  render() {
    const {tlRows} = this.props;
    return (
      <div>
        <h1>Timeline</h1>
        {/*ToDo not use bottun but fancy picture upload*/}
        <input type="submit"
               value="Add Picture"
               className="btn btn-primary"
               onClick={this.redirectToAddTimelinePage}/>
        <TimelineList tlRows={tlRows}/>
      </div>
    );
  }
}

TimelinePage.propTypes = {
  tlRows: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    tlRows: state.tlRows
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(timelineActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TimelinePage);

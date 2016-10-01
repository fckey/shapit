import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tlRowActions from '../../actions/timelineActions';
import TimelineForm from './TimelineForm'

class ManageTimelinePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tlRow: Object.assign({}, props.tlRow),
      errors: {}
    };
    this.createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
    this.updateTimelineRowState = this.updateTimelineRowState.bind(this);
    this.saveTimeLineRow = this.saveTimeLineRow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tlRow.id != nextProps.tlRow.id) {
      //Necessary to populate form when existing tlRow is loaded directly
      this.setState({tlRow: Object.assign({}, nextProps.tlRow)});
    }
  }

  updateTimelineRowState(event) {
    const field = event.target.name;
    let tlRow = this.state.tlRow;

    if(event.target.type === "file"){
      var files = event.target.files;
      var image_url = this.createObjectURL(files[0]);
      tlRow[field] = image_url;
    }else {
      tlRow[field] = event.target.value;
    }
    return this.setState({tlRow: tlRow});
  }

  saveTimeLineRow(event) {
    event.preventDefault();
    this.props.actions.saveTimelineRow(this.state.tlRow);
    this.context.router.push('/timeline')
  }

  render() {
    return (
      <TimelineForm
        onChange={this.updateTimelineRowState}
        onSave={this.saveTimeLineRow}
        tlRow={this.state.tlRow}
        errors={this.state.errors}
      />
    );
  }
}

ManageTimelinePage.propTypes = {
  tlRow: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageTimelinePage.contextTypes = {
  router: PropTypes.object
};

function getTimelineRowById(tlRows, id) {
  const tlRowArray = tlRows.filter(tlRow => tlRow.id == id);
  if (tlRowArray) return tlRowArray[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const tlRowId = ownProps.params.id;//from the path /tlRow/:id
  let tlRow = {id: '', date: '', img: '', result: "", memo: ''};

  if (tlRowId && state.timelineReducer.length > 0) {
    tlRow = getTimelineRowById(state.timelineReducer, tlRowId)
  }
  return {
    tlRow: tlRow,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tlRowActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTimelinePage);

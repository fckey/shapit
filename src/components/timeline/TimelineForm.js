import React from 'react';
import TextInput from '../common/TextInput';
import PictureInput from '../common/PictureInput';

const TimelineForm = ({tlRow, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1 className="jumbotron">Upload</h1>


      <PictureInput
        name="img"
        label="Your Picture"
        value={tlRow.img}
        onChange={onChange}
        error={errors.img}/>

      <TextInput
        name="memo"
        label="memo"
        value={tlRow.memo}
        onChange={onChange}
        error={errors.memo}/>

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

TimelineForm.propTypes = {
  tlRow: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};


export default TimelineForm;

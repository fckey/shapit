import React from 'react';

const PictureInput = ({name, label, onChange, value, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>

      <div className="field">
        <input
          type="file"
          name={name}
          className="form-control"
          onChange={onChange}/>
          {/*<img src={value} />*/}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );

};

PictureInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  error: React.PropTypes.string
};


export default PictureInput;

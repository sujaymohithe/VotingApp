import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({name,rows,cols,className,placeholder,value,onChange}) => {
  return (
        <textarea
          type="text"
          name={name}
          rows={rows}
          cols={cols}
          className={className}
          placeholder={placeholder}
          value={value || ""}
          onChange={onChange}/>  
       
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextArea;

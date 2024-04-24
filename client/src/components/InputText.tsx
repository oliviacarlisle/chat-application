import { useState, useEffect } from 'react';

const InputText: React.FC = ({ content, handleChange }) => {
  const [state, setState] = '';

  return (
    <textarea
      className='input-text'
      placeholder='Type message here'
      value={content} // Bind the state variable to the textarea's value
      onChange={handleChange} // Handler for capturing changes
      rows={1} // Number of visible text rows
    />
  );
};

export default InputText;

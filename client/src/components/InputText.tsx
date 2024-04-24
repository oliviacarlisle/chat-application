import { ChangeEvent } from 'react';

interface InputTextProps {
  content: string;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({ content, handleChange }) => (
  <textarea
    className='input-text'
    placeholder='Type message here'
    value={content}
    onChange={handleChange}
    rows={1}
  />
);

export default InputText;

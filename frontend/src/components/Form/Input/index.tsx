import React from 'react';
import './_index.scss';
interface IInput {
  icon?: string;
  placeholder: string;
  label: string;
  type?: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  error?: string;
}
const index = ({
  icon,
  label,
  placeholder,
  type = 'text',
  name,
  onChange,
  value,
  error,
}: IInput) => {
  return (
    <div className="form-input">
      {icon && (
        <div className="icon-container">
          <img src={icon} alt="icon input" />
        </div>
      )}
      <div className="label-input">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />

       
      </div>
      {error && <div className="error-input">{error}</div>}
    </div>
  );
};

export default index;

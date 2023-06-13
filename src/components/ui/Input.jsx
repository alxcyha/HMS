import { string, func } from "prop-types";

export default function Input({
  type = "text",
  name,
  placeholder,
  id,
  value,
  onChange,
}) {
  return (
    <input
      value={value}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  type: string,
  name: string,
  placeholder: string,
  id: string,
  onChange: func,
  value: string,
};

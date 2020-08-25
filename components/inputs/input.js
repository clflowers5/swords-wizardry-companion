import PropTypes from "prop-types";

function Input({ label, ...props }) {
  return (
    <label>
      <span>{label}</span>
      <input
        className="transition-colors duration-100 ease-in-out focus:outline-none border border-transparent focus:bg-white focus:border-gray-500 placeholder-gray-600 rounded-lg bg-white border border-gray-200 py-2 pr-4 px-3 block w-full appearance-none leading-normal ds-input"
        {...props}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;

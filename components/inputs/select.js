import PropTypes from "prop-types";

function Select({ children, label, ...props }) {
  return (
    <label>
      <span>{label}</span>
      <select
        className="transition-colors duration-100 ease-in-out focus:outline-none border border-transparent focus:bg-white focus:border-gray-500 placeholder-gray-600 rounded-lg bg-white border border-gray-200 py-2 pr-4 px-3 block w-full appearance-none leading-normal ds-input"
        {...props}
      >
        {children}
      </select>
    </label>
  );
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;

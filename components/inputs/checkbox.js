import PropTypes from "prop-types";

function CheckBox({ label, ...props }) {
  return (
    <label>
      <input type="checkbox" className="mr-2" {...props} />
      <span>{label}</span>
    </label>
  );
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CheckBox;

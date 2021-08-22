import PropTypes from "prop-types";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-1 px-3 bg-green-500 text-white font-semibold rounded-lg shadow-md"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => null,
};

export default Button;

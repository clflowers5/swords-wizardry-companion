import PropTypes from "prop-types";

function BookmarkIcon({ className, filled }) {
  return filled ? (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      {" "}
      <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z" />
    </svg>
  ) : (
    <svg
      className={className}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      {" "}
      <path d="M17,4v14.967l-4.212-1.805L12,16.824l-0.788,0.338L7,18.967V4H17 M17,2H7C5.9,2,5,2.9,5,4v18l7-3l7,3V4C19,2.9,18.1,2,17,2 L17,2z" />
    </svg>
  );
}

BookmarkIcon.propTypes = {
  className: PropTypes.string,
  filled: PropTypes.bool,
};

export default BookmarkIcon;

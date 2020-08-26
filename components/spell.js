import { useCallback } from "react";
import PropTypes from "prop-types";

// Components
import BookmarkIcon from "components/icons/bookmark";

function Spell({
  description,
  duration,
  isBookmarked,
  learnedBy,
  onBookmarkClick,
  range,
  table,
  title,
}) {
  const handleBookmarkClick = useCallback(() => {
    onBookmarkClick(title);
  }, [onBookmarkClick, title]);
  return (
    <div
      className="bg-white rounded overflow-hidden shadow-md border-solid border border-gray-200 p-3 mb-4"
      key={title}
    >
      <button className="float-right" onClick={handleBookmarkClick}>
        <BookmarkIcon filled={isBookmarked} />
      </button>

      <h5 className="font-medium underline">{title}</h5>

      <div>
        <div>
          <span>Learned by:</span>
          {learnedBy.map((profession, index) => (
            <span key={profession.className}>
              {index > 0 ? ", " : " "}
              {profession.className} - {profession.level}
            </span>
          ))}
        </div>
      </div>

      <div>Range: {range}</div>

      <div>Duration: {duration}</div>

      <div className="mt-3">
        {description.map((entry, index) => (
          <div key={index}>{entry}</div>
        ))}
      </div>

      {/* It's not pretty, but boy does it work */}
      {table && (
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: table }} />
      )}
    </div>
  );
}

Spell.propTypes = {
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  duration: PropTypes.string,
  isBookmarked: PropTypes.bool,
  learnedBy: PropTypes.arrayOf(PropTypes.object).isRequired,
  onBookmarkClick: PropTypes.func,
  range: PropTypes.string,
  table: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Spell;

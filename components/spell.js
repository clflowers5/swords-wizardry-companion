import PropTypes from "prop-types";

// Components
import BookmarkIcon from "components/icons/bookmark";

// Hooks
import useSpellBookmark from 'hooks/use-spell-bookmark';

function Spell({ title, learnedBy, range, duration, description, table }) {
  const { isBookmarked, onBookmarkClick } = useSpellBookmark(title);
  return (
    <div
      className="bg-white rounded overflow-hidden shadow-md border-solid border border-gray-200 p-3 mb-4"
      key={title}
    >
      <button className="float-right" onClick={onBookmarkClick}>
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
  title: PropTypes.string.isRequired,
  learnedBy: PropTypes.arrayOf(PropTypes.object).isRequired,
  range: PropTypes.string,
  duration: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  table: PropTypes.string,
};

export default Spell;

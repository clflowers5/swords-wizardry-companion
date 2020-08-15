import PropTypes from "prop-types";

import Spell from "components/spell";

const SpellList = React.memo(function SpellList({ spellList }) {
  return (
    <>
      {spellList.map((spell) =>
        spell.item ? (
          <Spell key={spell.item.title} {...spell.item} />
        ) : (
          <Spell key={spell.title} {...spell} />
        )
      )}
    </>
  );
});

SpellList.propTypes = {
  spellList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SpellList;

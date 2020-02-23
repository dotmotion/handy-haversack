export default (state, action) => {
  switch (action.type) {
    case "UPDATE_CHARACTER":
      return {
        ...state,
        character: action.payload
      };

    case "SPELLBOOK_UPDATE":
      return {
        ...state,
        spellbook: action.payload
      };

    case "SPELLBOOK_ADD":
      return {
        ...state,
        spellbook: [action.payload, ...state.spellbook]
      };

    case "SPELLBOOK_DEL":
      return {
        ...state,
        spellbook: state.spellbook.filter(
          spell => spell.index !== action.payload.index
        )
      };

    default:
      return state;
  }
};

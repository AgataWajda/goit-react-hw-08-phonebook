export const ContactFilter = ({ filter, getFilter }) => {
  return <input name="filter" value={filter} onChange={getFilter}></input>;
};

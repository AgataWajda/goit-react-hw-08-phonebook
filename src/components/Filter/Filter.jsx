import css from './Filter.module.css';

export const ContactFilter = () => {
  return (
    <div>
      <h3 className={css.subtitle}>Find contact by name</h3>
      <input name="filter" className={css.filter}></input>
    </div>
  );
};

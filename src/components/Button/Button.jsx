import s from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div>
    <button type="button" onClick={onClick} className={s.button}>
      Load more
    </button>
    </div>

  )
};
export default Button;
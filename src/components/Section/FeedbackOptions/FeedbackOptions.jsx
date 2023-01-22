import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/feedback-options.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(name => (
    <button
      key={name}
      type="submit"
      className={styles.btn}
      onClick={() => onLeaveFeedback(name)}
    >
      {name}
    </button>
  ));
  return <>{elements}</>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

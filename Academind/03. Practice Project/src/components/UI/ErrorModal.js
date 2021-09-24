import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div className={styles[props.error.state]}>
      <div className={styles.backdrop} onClick={props.onClick} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.error.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

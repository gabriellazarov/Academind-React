import Card from '../UI/Card';
import styles from './UserList.module.css';

const UserList = (props) => {
  if (props.users.length < 1) return 0;
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} {+user.age === 1 ? 'year old' : 'years old'})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

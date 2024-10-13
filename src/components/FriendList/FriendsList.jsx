import classes from './FriendsList.module.css';
import FriendsListItem from './FriendsListItem';

const FriendsList = ({ friends }) => {
    return (
        <ul className={classes["friends-list"]}>
        {friends.map((friend) => (
            <li key={friend.id} className={classes["friends-item"]}>
            <FriendsListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
            </li>
        ))}
        </ul>
    );
}
export default FriendsList;


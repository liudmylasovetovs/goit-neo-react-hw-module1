import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className = {styles.profile}>
      <div className = {styles.description}>
        <img
          src={image}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="numbers">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="numbers">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="numbers">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

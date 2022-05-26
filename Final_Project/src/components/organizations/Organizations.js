import * as styles from "./Organizations.module.css";

function Organizations({orgImg, orgName}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>{orgName}</p>
        <img
          src={orgImg}
          alt="org avatar"
        ></img>
      </div>
    </div>
  );
}

export default Organizations;

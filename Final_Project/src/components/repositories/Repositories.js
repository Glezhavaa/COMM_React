import * as styles from "./Repositories.module.css"
function Repositories({ name, stars, fork, url }) {

  return (
    <div className={styles.row}>
      <p>Name : <span>{name}</span></p>
      <p>Stars: <span>{stars}</span></p>
      <p>Forks: <span>{fork}</span></p>
      <button  className={styles.btn} onClick={() => {
              window.open(`https://github.com/${url}`, "_blank");
            }} >See Repository</button>
    </div>
  );
}

export default Repositories;

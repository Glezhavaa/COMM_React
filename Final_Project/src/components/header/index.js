import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./header.module.css";
import ROUTES from "../../config/routes";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const {logOut} = useContext(AuthContext)
  return (
    <header>
      <nav>
        <div className={styles.container}>
          <div className={styles.navLogo}>
            <ion-icon name="logo-github"></ion-icon>
          </div>
          <div className={styles.navList}>
            <ul>
              <li>
                <NavLink
                  to={ROUTES.MAIN}
                  className={({ isActive }) =>
                    isActive ? styles.activeItem : null
                  }
                >
                  Dashboard{" "}
                  <span>
                    <ion-icon name="home-outline"></ion-icon>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${ROUTES.SEARCH}`}
                  className={({ isActive }) =>
                    isActive ? styles.activeItem : null
                  }
                >
                  Search{" "}
                  <span>
                    <ion-icon name="search-outline"></ion-icon>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${ROUTES.FAVORITES}`}
                  className={({ isActive }) =>
                    isActive ? styles.activeItem : null
                  }
                >
                  Favorites{" "}
                  <span>
                    <ion-icon name="star-outline"></ion-icon>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.navButton}>
            <button onClick={logOut}>
              Log Out
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

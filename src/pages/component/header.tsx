import { Outlet, useNavigate } from "react-router-dom";
import styles from "./header.module.css";

export interface TabModel {
  title: string;
  path: string;
}

const Header = () => {
  const navigate = useNavigate();
  const tabContents: TabModel[] = [
    {
      title: "FoodHub",
      path: "/foodHub",
    },
    {
      title: "Test",
      path: "/test",
    },
  ];

  const onTabBarClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <fieldset className={styles.navBarFieldSet}>
        <legend className={styles.navBarLegend}>
          <nav className={styles.navBar}>
            <ul className={styles.listContainer}>
              {tabContents &&
                tabContents.map((data, index) => {
                  return (
                    <>
                      <li
                        key={data.title}
                        className={styles.listItems}
                        onClick={(e) => onTabBarClick(data.path)}
                      >
                        {data.title}
                      </li>
                    </>
                  );
                })}
            </ul>
          </nav>
        </legend>
        <Outlet />
      </fieldset>
    </>
  );
};

export default Header;

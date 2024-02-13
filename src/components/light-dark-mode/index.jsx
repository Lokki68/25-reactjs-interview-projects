import styles from './styles.module.css'
import useLocalStorage from "./useLocalStorage";

import { FaMoon, FaSun } from "react-icons/fa";


export default function LightDarkMode(props) {

  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light' )
  };

  console.log(theme)

  return (
      <div className={styles.lightDarkMode} data-theme={theme} >
        <div className={styles.container}>
          <p>Hello world</p>

          <button onClick={handleToggleTheme} >
            Change Theme
            <span>
              {
                theme === 'light'
                ? <FaMoon />
                : <FaSun />
              }
            </span>
          </button>
        </div>
      </div >
  );
}


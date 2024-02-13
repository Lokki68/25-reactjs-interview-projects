import styles from './menu-list.module.css'
import MenuItem from "./menu-item";

export default function MenuList({list = []}) {
  return (
      <ul className={styles.menuListContainer} >
        {
          list.length > 0
              ? list.map((menuItem, index) => <MenuItem item={menuItem} key={index} />)
              : null
        }
      </ul >
  );
}


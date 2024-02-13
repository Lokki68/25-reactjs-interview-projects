import styles from './styles.module.css'
import MenuList from "./menu-list";

export default function TreeView({menus = []}) {
  return (
      <div className={styles.treeViewContainer} >
        <MenuList list={menus}  />
      </div >
  );
}


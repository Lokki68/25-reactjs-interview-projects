import styles from './menu-item.module.css'
import listStyle from './menu-list.module.css'
import MenuList from "./menu-list";
import {useState} from "react";
import { GoPlusCircle, GoNoEntry } from "react-icons/go";


export default function MenuItem({item}) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
    })
  };
  return (
      <li >
        <div className={styles.menuItem} >
          <p >{item.label}</p >
          {
              item.children && item.children.length > 0
                ? (
                    <span onClick={() => handleToggleChildren(item.label)}>
                      {
                        displayCurrentChildren[item.label]
                            ? <GoNoEntry />
                            : <GoPlusCircle />
                      }
                    </span>
                  )
                : null
          }
        </div >
        <ul className={listStyle.menuListContainer} >
          {
            item.children && item.children.length > 0 && displayCurrentChildren[item.label]
                ? <MenuList list={item.children}/>
                : null
          }
        </ul>
      </li >
  );
}


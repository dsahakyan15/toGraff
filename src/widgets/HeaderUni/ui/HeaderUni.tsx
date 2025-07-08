import { useState } from 'react';

import { FaSistrix } from "react-icons/fa6";
import styles from './HeaderUni.module.css'

import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
<<<<<<< HEAD
=======
import UserInfo from './UserInfo';
>>>>>>> master

type Props = {}

const HeaderUni = (props: Props) => {
<<<<<<< HEAD
  let [searchOn, setSearchOn] = useState<Boolean>(false)
=======
  const [searchOn, setSearchOn] = useState<boolean>(false)
>>>>>>> master


  return (
    <div className={styles.header}>
<<<<<<< HEAD
      
      <Logo/>
      {
        searchOn ?
          <Search setSearchOn={setSearchOn}/>
          :
          <Menu/>
      }
      <div className={styles.personal}>
        
        <div onClick={() => setSearchOn(true)} className={styles.searchBtn}><FaSistrix /></div>
        <span className={styles.user}>Личные данные</span>
=======

      <Logo />
      {
        searchOn ?
          <Search setSearchOn={setSearchOn} />
          :
          <Menu />
      }
      <div className={styles.personal}>

        <div
          onClick={() => setSearchOn(true)}
          className={styles.searchBtn}>
          <FaSistrix />
        </div>
        <UserInfo />
>>>>>>> master
      </div>

    </div>
  )
}

export default HeaderUni
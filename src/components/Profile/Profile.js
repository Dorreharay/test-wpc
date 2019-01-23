import React, {Component} from 'react'
import { Link } from 'react-router-dom';

import { Header } from 'components';
import PropsChart from './Chart/Chart'
import styles from "./Profile.scss";
class Profile extends Component {
  statisticContent = () => {
    return (
      <div className={styles.statisticContent}>
      <PropsChart />
      </div>
    )
  }
  render(){
    const {orderListType, orderTypes, chooseOrdersListType} = this.props;
    
    return (
      <div className={styles.Profile}>
        <div className={styles.formsDataUser}>
          <div className={styles.userIMG}>
            <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="Фото користувача"/>
            <p>Мій статус по житті</p>
            <p>останій візит {new Date().toUTCString()}</p>
          </div>
          <div>
            <div className={styles.userFullName}>
              <p>Full Name</p>
            </div>
            <div className={styles.userLogin}>
              <p>Full_Name_blabla</p>
            </div>
            <button onClick={()=>console.log('Click')}>Редагувати профіль</button>
          </div>
        </div>
        <div className={styles.userInformation}>
          <div className={styles.userInformation_Menu}>
          <ul className={styles.Menu}>
                {orderTypes.map((item, index) => {
                  return (<li key={index} className={styles[item.className]} onClick={() =>
                      chooseOrdersListType(item.typeDesc)}
                      >
                    {item.typeName}
                  </li>)
                })}
            </ul>
          </div>
          {orderTypes[0].active ? 
          <div>
            Графік
          </div> : orderTypes[1].active ? 
          <div>
            План роботи
          </div> : orderTypes[2].active ? 
            this.statisticContent() : null}
          
        </div>
      </div>
    )
  }
}


export default Profile;
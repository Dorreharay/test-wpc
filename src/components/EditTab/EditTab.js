import React from 'react'
import BackIcon from '../../assets/svg/back-arrow-icon.js';

import styles from './EditTab.scss';

const EditTab = ({ editMode, editTabToggled, toggleEditTab, ordersList, page, editIndex }) => {
  const editedRow = ordersList[page][editIndex];

  return (
    <div className={editTabToggled && editMode ? styles.editTabToggled : styles.editTab}>
      {editTabToggled && editMode ?
        <div className={styles.colContainer}>
          <div className={styles.firstColumn}>
            <div>
              <div className={styles.inputArea}>
                <label>Дата реєстрації</label>
                <input type="text" value={editedRow.registered} />
              </div>
              <div className={styles.inputArea}>
                <label>Id</label>
                <input type="text" value={editedRow.guid} />
              </div>
              <div className={styles.inputArea}>
                <label>Email</label>
                <input type="text" value={editedRow.email} />
              </div>
              <div className={styles.inputArea}>
                <label>Phone</label>
                <input type="text" value={editedRow.phone} />
              </div>
              <div className={styles.inputArea}>
                <label>Address</label>
                <input type="text" value={editedRow.address} />
              </div>
              <div className={styles.inputArea}>
                <label>Balance</label>
                <input type="text" value={editedRow.balance} />
              </div>
            </div>
            <button className={styles.save}>Зберегти</button>
          </div>
          <div className={styles.secondColumn}>

          </div>
        </div>
        : null}

      <BackIcon className={styles.backIcon} toggleEditTab={toggleEditTab} editIndex={editIndex} />
    </div>
  )
}



export default EditTab;

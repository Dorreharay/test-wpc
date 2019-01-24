import React from 'react';

import BackIcon from '../../assets/svg/back-arrow-icon.js';

import styles from './EditTab.scss';

const EditTab = ({
  editMode,
  editTabToggled,
  toggleEditTab,
  ordersList,
  orderTypes,
  orderListTypeCurrent,
  page,
  editIndex,
  handleNewInput,
  formData,
  applyEditChanges,
  toggleEditedAlert,
}) => {
  const editedRow = ordersList[page][editIndex];

  return (
    <div className={editTabToggled && editMode ? styles.editTabToggled : styles.editTab}>
      <div className={styles.colContainer}>
        <form className={styles.firstColumn} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputArea}>
            <label>Дата реєстрації</label>
            <input onChange={(e) => handleNewInput(e)} id="registered" type="text" value={formData.registered} />
          </div>
          <div className={styles.inputArea}>
            <label>Id</label>
            <input onChange={(e) => handleNewInput(e)} id="index" type="text" value={formData.index} />
          </div>
          <div className={styles.inputArea}>
            <label>Email</label>
            <input onChange={(e) => handleNewInput(e)} id="email" value={formData.email} />
          </div>
          <div className={styles.inputArea}>
            <label>Phone</label>
            <input onChange={(e) => handleNewInput(e)} id="phone" value={formData.phone} />
          </div>
          <div className={styles.inputArea}>
            <label>Address</label>
            <input onChange={(e) => handleNewInput(e)} id="address" value={formData.address} />
          </div>
          <div className={styles.inputArea}>
            <label>Тип</label>
            <select
              defaultValue
              onClick={() => console.log('aaaaaa')}
              onChange={(e) => handleNewInput(e)}
              id="ordertype"
            >
              {orderTypes.map((item) => (
                <option value={item.typeDesc} selected={item.typeDesc === orderListTypeCurrent}>
                  {item.typeName}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={() => {
              applyEditChanges(formData, orderListTypeCurrent);
              toggleEditTab(editIndex);
              toggleEditedAlert();
            }}
            className={styles.save}
          >
            Зберегти
          </button>
        </form>
        <div className={styles.secondColumn} />
      </div>

      <BackIcon className={styles.backIcon} toggleEditTab={toggleEditTab} editIndex={editIndex} />
    </div>
  );
};

export default EditTab;

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Alert, EditTab } from 'components';
import styles from "./OrdersTable.scss";

class OrdersTable extends Component {
  state = {
    checked: [],
    nonunique: [],
    checkedAll: false,
    editTabToggled: false
  }
  componentDidMount() {
    const { startAsyncAction } = this.props;
    startAsyncAction()
  }
  componentDidUpdate(prevProps, prevState) {
    const { startAsyncAction, projectName, editMode } = this.props;

    if (prevProps.projectName !== projectName) {
      startAsyncAction()
    }
    if(prevProps.editMode !== editMode){
      this.setState({ editTabToggled: false })
    }
  }

  handleCheck = (index) => {
    const { checked } = this.state;
    this.setState({
      checked: checked.includes(index) ?
        checked.filter((item, id) => item !== index) : [...new Set([...checked, index])]
    })
  }

  handleCheckAll = () => {
    const { checked, checkedAll } = this.state;
    const { ordersList } = this.props;

    this.setState({
      checkedAll: !checkedAll, checked:
        checked.length > checked.length - 1 && checked.length > 0 ? [] : ordersList.map((item, index) => index)
    })
  }

  toggleEditTab = () => {
    const { editTabToggled } = this.state;
    const { editMode } = this.props;
    
    this.setState({ editTabToggled: !editTabToggled })
  }

  copyToClipboard(e, text) {
    const { copyToClipboardAction, resetClipboard } = this.props;
    navigator.clipboard.writeText(text)
    copyToClipboardAction()
    setTimeout(() => resetClipboard(), 2000)
  }

  render() {
    const { checked, editTabToggled } = this.state;
    const { ordersList, chooseOrdersListType, orderTypes, copiedToClickboard, editMode, loading } = this.props;

    return (
      <div>
        {ordersList.length === 0 ? null : <ul className={styles.orderTypes}>
          {orderTypes.map((orderType, index) =>
            <li key={index} className={styles[orderType.className]} onClick={() =>
              chooseOrdersListType(orderType.typeDesc)}>{orderType.typeName}</li>)}
        </ul>}
        
        <table>
          <tbody>
            <tr>
              {editMode ? <td></td> :
                <th>
                  {checked.length > 0 && checked.length < ordersList.length ?
                    <div className={styles.checkbox}>
                      <input type="checkbox" onChange={this.handleCheckAll} value="1" id="checkbox" name="" checked={checked.length === ordersList.length} />
                      <label htmlFor="checkbox">
                        <div className={styles.clear}>-</div>
                      </label>
                    </div> :
                    <div className={styles.checkbox}>
                      <input type="checkbox" onChange={this.handleCheckAll} value="1" id="checkbox" name="" checked={checked.length === ordersList.length} />
                      <label htmlFor="checkbox"></label>
                    </div>}
                </th>}
              <th>Дата</th>
              <th>Ім'я</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Адреса</th>
            </tr>
            {ordersList.map((order, index) =>
              <tr key={index} style={{ background: checked.includes(index) ? '#ffecc4' : '#f7f7f7' }}>
              {editMode ? 
                <td>
                  <div className={styles.checkbox}>
                    <svg onClick={this.toggleEditTab} width='23px' height='22px' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 129 129">
                      <g>
                        <g>
                          <path d="m119.2,114.3h-109.4c-2.3,0-4.1,1.9-4.1,4.1s1.9,4.1 4.1,4.1h109.5c2.3,0 4.1-1.9 4.1-4.1s-1.9-4.1-4.2-4.1z"/>
                          <path d="m5.7,78l-.1,19.5c0,1.1 0.4,2.2 1.2,3 0.8,0.8 1.8,1.2 2.9,1.2l19.4-.1c1.1,0 2.1-0.4 2.9-1.2l67-67c1.6-1.6 1.6-4.2 0-5.9l-19.2-19.4c-1.6-1.6-4.2-1.6-5.9-1.77636e-15l-13.4,13.5-53.6,53.5c-0.7,0.8-1.2,1.8-1.2,2.9zm71.2-61.1l13.5,13.5-7.6,7.6-13.5-13.5 7.6-7.6zm-62.9,62.9l49.4-49.4 13.5,13.5-49.4,49.3-13.6,.1 .1-13.5z"/>
                        </g>
                      </g>
                    </svg>
                  </div>
                </td> :
                <td>
                  <div className={styles.checkbox}>
                    <input type="checkbox" value="1" onChange={(e) => this.handleCheck(index)} id={index} disabled={editMode} checked={checked.includes(index)} />
                    <label htmlFor={index}></label>
                  </div>
                </td>}
                <td onDoubleClick={() => this.handleCheck(index)}>
                  <div className={styles.innerText} onClick={(e) => this.copyToClipboard(e, new Date().toDateString())}>{new Date().toDateString()}</div>
                </td>
                <td onDoubleClick={() => this.handleCheck(index)} >
                  <div className={styles.innerText} onClick={(e) => this.copyToClipboard(e, order.name)} >{order.name}</div>
                </td>
                <td onDoubleClick={() => this.handleCheck(index)} >
                  <div className={styles.innerText} onClick={(e) => this.copyToClipboard(e, order.email)}>{order.email}</div>
                </td>
                <td onDoubleClick={() => this.handleCheck(index)}>
                  <div className={styles.innerText} onClick={(e) => this.copyToClipboard(e, order.phone)} >{order.phone}</div>
                </td>
                <td onDoubleClick={() => this.handleCheck(index)} >
                  <div className={styles.innerText} onClick={(e) => this.copyToClipboard(e, order.address.street)}>{order.address.street}</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className={styles.footer}>
          <svg className={styles.navArrow} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 477.175 477.175" space="preserve">
            <g>
              <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
            </g>
          </svg>
          <div className={styles.point}>1</div>
          <div className={styles.point}>2</div>
          <div className={styles.point}>3</div>
          <div className={styles.point}>4</div>
          <div className={styles.point}>5</div>
          <svg className={styles.navArrow} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xlink="http://www.w3.org/1999/xlink">
            <g>
              <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
            </g>
          </svg>

        </div>
        {copiedToClickboard ? <Alert message='Скопійовано' ></Alert> : null}
        <EditTab toggleEditTab={this.toggleEditTab} editMode={editMode} editTabToggled={editTabToggled} />
      </div >
    )
  }
}


export default OrdersTable;
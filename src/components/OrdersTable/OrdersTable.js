import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Alert, EditTab, Pagination } from 'components';
import { EditIcon } from '../../assets/svg';

import styles from "./OrdersTable.scss";

class OrdersTable extends Component {
  state = {
    page: 0,
    checked: [],
    nonunique: [],
    checkedAll: false,
    editTabToggled: false,
    formData: {}
  }
  componentDidMount() {
    const { startAsyncAction } = this.props;
    startAsyncAction()
  }
  componentDidUpdate(prevProps, prevState) {
    const { startAsyncAction, applyEditChanges, projectName, editMode, isEdited } = this.props;

    if (prevProps.projectName !== projectName || isEdited == true) {
      startAsyncAction()
    }
    if (prevProps.editMode !== editMode) {
      this.setState({ editTabToggled: false, checked: [] })
    }
  }

  handleCheck = (index) => {
    const { checked } = this.state;
    this.setState({
      checked: checked.includes(index) ?
        checked.filter((item) => item !== index) : [...new Set([...checked, index])]
    })
  }

  handleCheckAll = () => {
    const { checked, checkedAll, page } = this.state;
    const { ordersList } = this.props;

    this.setState({
      checkedAll: !checkedAll, checked:
        checked.length > checked.length - 1 && checked.length > 0 ? [] : ordersList[page].map((item, index) => index)
    })
  }

  toggleEditTab = (editIndex) => {
    const { checked, editTabToggled, page } = this.state;
    const { ordersList } = this.props;

    const editedRow = ordersList[page][editIndex];

    this.setState({
      editTabToggled: !editTabToggled,
      editIndex: editIndex,
      checked: checked.includes(editIndex) ?
        checked.filter((item) => item !== editIndex) : [...new Set([...checked, editIndex])],
      formData: {
        id: editedRow.id,
        index: editedRow.index,
        name: editedRow.name,
        email: editedRow.email,
        guid: editedRow.guid,
        balance: editedRow.balance,
        phone: editedRow.phone,
        address: editedRow.address,
        registered: editedRow.registered,
      }
    })

  }

  handleNewInput = (e) => {
    const { formData } = this.state;

    this.setState({
      formData: {
        ...formData,
        [e.target.id]: e.target.value
      }
    })
  }

  copyToClipboard(e, text) {
    const { copyToClipboardAction, resetClipboard } = this.props;
    navigator.clipboard.writeText(text)
    copyToClipboardAction()
    setTimeout(() => resetClipboard(), 2000)
  }

  togglePage = (index) => this.setState({ page: index })
  toPreviousPage = () => this.setState({ page: this.state.page !== 0 ? this.state.page - 1 : this.state.page })
  toNextPage = () => this.setState({ page: this.state.page !== this.props.ordersList.length - 1 ? this.state.page + 1 : this.state.page })

  render() {
    const { checked, editTabToggled, editIndex, page, formData } = this.state;
    const { ordersList, chooseOrdersListType, orderTypes, copiedToClickboard, editMode, applyEditChanges } = this.props;

    return (
      <div>
          <Pagination
              className={styles.paginationTop}
              ordersList={ordersList}
              togglePage={this.togglePage}
              page={page}
              toPreviousPage={this.toPreviousPage}
              toNextPage={this.toNextPage}
            />
        <ul className={styles.orderTypes}>
          {orderTypes.map((orderType, index) =>
            <li key={index} className={styles[orderType.className]} onClick={() =>
              chooseOrdersListType(orderType.typeDesc)}>{orderType.typeName}</li>)}
              
        </ul>
        
        <table>
          <tbody>
            <tr>
              {editMode ? <td></td> :
                <th>
                  {checked.length > 0 && checked.length < ordersList[page].length ?
                    <div className={styles.checkbox}>
                      <input type="checkbox" onChange={this.handleCheckAll} value="1" id="checkbox" name="" checked={checked.length === ordersList[page].length} />
                      <label htmlFor="checkbox">
                        <div className={styles.clear}>-</div>
                      </label>
                    </div> :
                    <div className={styles.checkbox}>
                      <input type="checkbox" onChange={this.handleCheckAll} value="1" id="checkbox" name="" checked={checked.length === ordersList[page].length} />
                      <label htmlFor="checkbox"></label>
                    </div>}
                </th>}
              <th>Дата реєстрації</th>
              <th>Id</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Адреса</th>
            </tr>
            {ordersList[page].map((order, index) =>
              <tr key={index} style={{ background: checked.includes(index) ? '#fff5dc' : 'white' }}>
                {editMode ?
                  <td>
                    <EditIcon onClick={() => this.toggleEditTab(index)} className={styles.checkbox} />
                  </td> :
                  <td>
                    <div className={styles.checkbox}>
                      <input type="checkbox" value="1" onChange={(e) => this.handleCheck(index)} id={index} disabled={editMode} checked={checked.includes(index)} />
                      <label htmlFor={index}></label>
                    </div>
                  </td>}
                <td onDoubleClick={() => this.handleCheck(index)} >
                  <div className={styles.innerText} onClick={(e) => this.copyToClipboard(e, order.registered)}>{order.registered}</div>
                </td>
                <td onDoubleClick={() => this.handleCheck(index)} >
                  <div className={styles.innerText} onClick={(e) => this.copyToClipboard(e, order.guid)} >{order.guid}</div>
                </td>
                <td onDoubleClick={() => this.handleCheck(index)} >
                  <div className={styles.innerText} onClick={(e) => this.copyToClipboard(e, order.email)}>{order.email}</div>
                </td>
                <td onDoubleClick={() => this.handleCheck(index)}>
                  <div className={styles.innerText} onClick={(e) => this.copyToClipboard(e, order.phone)} >{order.phone}</div>
                </td>
                <td onDoubleClick={() => this.handleCheck(index)} >
                  <div className={styles.innerText} onClick={(e) => this.copyToClipboard(e, order.address)}>{order.address}</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className={styles.footer}>
          <Pagination
            className={styles.paginationBottom}
            ordersList={ordersList}
            togglePage={this.togglePage}
            page={page}
            toPreviousPage={this.toPreviousPage}
            toNextPage={this.toNextPage}
          />
        </div>

        {copiedToClickboard ? <Alert message='Скопійовано' ></Alert> : null}

        <EditTab
          toggleEditTab={this.toggleEditTab}
          handleNewInput={this.handleNewInput}
          editMode={editMode}
          editTabToggled={editTabToggled}
          ordersList={ordersList}
          editIndex={editIndex}
          page={page}
          formData={formData}
          applyEditChanges={applyEditChanges}
        />
      </div >
    )
  }
}


export default OrdersTable;
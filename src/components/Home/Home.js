import React, { Component } from 'react';
import { Header, TableMenu, OrdersTable, Loader } from 'components';

import styles from './Home.scss';

class Home extends Component {
  state = {
    settingsToggled: false,
  };

  handleAsyncAction = () => {
    const { getOrders, orderListTypeCurrent } = this.props;
    getOrders(orderListTypeCurrent);
  };

  chooseProject = (projectName) => {
    this.props.chooseProject(projectName);
  };
  chooseOrdersListType = (orderListType) => {
    this.props.chooseOrdersListType(orderListType);
  };

  applyEditChanges = (formData) => {
    this.props.applyEditChanges(formData);
  };

  render() {
    const {
      toggleEditMode,
      editMode,
      toggleDeleteMode,
      deleteMode,
      copiedToClickboard,
      projectName,
      projectsList,
      ordersList,
      orderTypes,
      location,
      loading,
      getOrders,
      copyToClipboardAction,
      resetClipboard,
      isEdited,
      orderListTypeCurrent,
      deleteOrder,
    } = this.props;

    return (
      <div className={location.pathname === '/orders' ? styles.mainActive : styles.main}>
        <TableMenu
          projectName={projectName}
          projectsList={projectsList}
          chooseProject={this.chooseProject}
          toggleEditMode={toggleEditMode}
          editMode={editMode}
          toggleDeleteMode={toggleDeleteMode}
          deleteMode={deleteMode}
        />
        {projectName === 'Виберіть проект' ? (
          <div className={styles.default}>Виберіть проект зі списку для початку роботи з системою</div>
        ) : (
          <OrdersTable
            projectName={projectName}
            ordersList={ordersList}
            orderTypes={orderTypes}
            chooseOrdersListType={this.chooseOrdersListType}
            getOrders={getOrders}
            orderListTypeCurrent={orderListTypeCurrent}
            copyToClipboardAction={copyToClipboardAction}
            resetClipboard={resetClipboard}
            copiedToClickboard={copiedToClickboard}
            editMode={editMode}
            deleteMode={deleteMode}
            isEdited={isEdited}
            deleteOrder={deleteOrder}
            applyEditChanges={this.applyEditChanges}
            loading={loading}
          />
        )}

        {/* {loading ? <Loader /> : null} */}
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { Header, TableMenu, OrdersTable, Loader } from "components";

import styles from "./Home.scss";

class Home extends Component {
  state = {
    settingsToggled: false
  };

  handleAsyncAction = () => {
    const { startAsyncAction } = this.props;
    startAsyncAction()
  };

  chooseProject = (projectName) => {
    this.props.chooseProject(projectName)
  }
  chooseOrdersListType = (orderListType) => {
    this.props.chooseOrdersListType(orderListType)
  }

  applyEditChanges = (formData) => {
    this.props.applyEditChanges(formData)
  }

  render() {
    const {
      toggleEditMode,
      editMode,
      copiedToClickboard,
      projectName,
      projectsList,
      ordersList,
      orderTypes,
      location,
      loading,
      startAsyncAction,
      copyToClipboardAction,
      resetClipboard,
      isEdited
    } = this.props;


    console.log(this.props.editMode)
    return (
      <div className={location.pathname === '/orders' ? styles.mainActive : styles.main}>

        <TableMenu
          projectName={projectName}
          projectsList={projectsList}
          chooseProject={this.chooseProject}
          toggleEditMode={toggleEditMode}
          editMode={editMode}
        />
        {projectName === 'Виберіть проект' ?
          <div className={styles.default} >Виберіть проект зі списку для початку роботи з системою</div> :
          <OrdersTable
            projectName={projectName}
            ordersList={ordersList}
            orderTypes={orderTypes}
            chooseOrdersListType={this.chooseOrdersListType}
            startAsyncAction={startAsyncAction}
            copyToClipboardAction={copyToClipboardAction}
            resetClipboard={resetClipboard}
            copiedToClickboard={copiedToClickboard}
            editMode={editMode}
            applyEditChanges={this.applyEditChanges}
            loading={loading}
            isEdited={isEdited}
          />}

        {loading ? <Loader /> : null}
      </div>
    );
  }
}

export default Home;


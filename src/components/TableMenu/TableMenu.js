import React, { Component } from 'react'
import { ChooseProjectIcon, SpreadIcon, SearchIcon, EditIcon, SettingsIcon } from '../../assets/svg';

import styles from "./TableMenu.scss";

export class TableMenu extends Component {
  state = {
    toggled: false
  }
  // componentDidUpdate(){
  //   console.log(this.state.editMode)
  // }
  handleClick = (e) => {
    const { toggled } = this.state;
    e.stopPropagation();
    this.setState({ toggled: !toggled })
  }
  handleEdit = () => {
    const { toggleEditMode } = this.props;
    toggleEditMode()
  }
  handleProject = (name) => {
    this.props.chooseProject(name);
    this.setState({ toggled: false })
  }
  render() {
    const { toggled } = this.state;
    const { projectName, projectsList, editMode } = this.props;

    return (
      <div className={styles.menu} onClick={() => this.setState({ toggled: false })}>
        <div className={styles.firstPart}>
          <div className={styles.choose}>
            <div className={styles.upperbox} onClick={this.handleClick}>
              <div>{projectName}</div>
              <ChooseProjectIcon className={toggled ? styles.firstPartIconOpen : styles.firstPartIconClosed} />
            </div>
            <div className={toggled ? styles.lowerboxopened : styles.lowerboxclosed}>
              {projectsList.map((project, index) => <li key={index} className={styles[project.className]} onClick={() => this.handleProject(project.name)}>{project.name}</li>)}
            </div>
          </div>
          {projectName !== 'Виберіть проект' ? <div style={{ display: 'flex', flexDirection: 'row' }}><div className={styles.add}>+ Додати заявку</div>
            <div className={styles.spread}>
              <SpreadIcon className={styles.spreadIcon} />
            </div>
          </div> : null}
        </div>
        {projectName !== 'Виберіть проект' ? <div className={styles.secondPart}>
          <div className={styles.search}>
            <SearchIcon className={styles.secondPartIcon} />
            <div>Пошук</div>
          </div>
          <div onClick={this.handleEdit} className={editMode ? styles.editActive : styles.edit}>
            <EditIcon className={styles.secondPartIcon} />
            <div>Редагувати поле</div>
          </div>
          <div className={styles.settings}>
            <SettingsIcon className={styles.secondPartIcon} />
            <div>Налаштування</div>
          </div>
        </div> : null}
      </div>
    )
  }
}

export default TableMenu

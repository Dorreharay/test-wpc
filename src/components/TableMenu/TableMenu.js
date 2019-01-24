import React, { Component } from 'react';
import { ChooseProjectIcon, SpreadIcon, SearchIcon, EditIcon, SettingsIcon, DeleteIcon } from '../../assets/svg';

import styles from './TableMenu.scss';

export class TableMenu extends Component {
  state = {
    toggled: false,
  };

  handleClick = (e) => {
    const { toggled } = this.state;
    e.stopPropagation();
    this.setState({ toggled: !toggled });
  };

  handleProject = (name) => {
    this.props.chooseProject(name);
    this.setState({ toggled: false });
  };
  render() {
    const { toggled } = this.state;
    const { projectName, projectsList, toggleEditMode, editMode, deleteMode, toggleDeleteMode } = this.props;

    return (
      <div className={styles.menu} onClick={() => this.setState({ toggled: false })}>
        <div className={styles.firstPart}>
          <div className={styles.choose}>
            <div className={styles.upperbox} onClick={this.handleClick}>
              <div>{projectName}</div>
              <ChooseProjectIcon className={toggled ? styles.firstPartIconOpen : styles.firstPartIconClosed} />
            </div>
            <div className={toggled ? styles.lowerboxopened : styles.lowerboxclosed}>
              {projectsList.map((project, index) => (
                <li key={index} className={styles[project.className]} onClick={() => this.handleProject(project.name)}>
                  {project.name}
                </li>
              ))}
            </div>
          </div>
          {projectName !== 'Виберіть проект' ? (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div className={styles.add}>+ Додати заявку</div>
              <div className={styles.spread}>
                <SpreadIcon className={styles.spreadIcon} />
              </div>
            </div>
          ) : null}
        </div>
        {projectName !== 'Виберіть проект' ? (
          <div className={styles.secondPart}>
            <div className={styles.search}>
              <SearchIcon className={styles.secondPartIcon} />
              <div />
            </div>
            <div onClick={toggleEditMode} className={editMode ? styles.editActive : styles.edit}>
              <EditIcon className={styles.secondPartIcon} />
              <div />
            </div>
            <div onClick={toggleDeleteMode} className={deleteMode ? styles.editActive : styles.edit}>
              <DeleteIcon className={styles.secondPartIcon} />
              <div />
            </div>
            <div className={styles.settings}>
              <SettingsIcon className={styles.secondPartIcon} />
              <div />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default TableMenu;

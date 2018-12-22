// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskCard from '../../components/TaskCard/TaskCard';
import * as styles from './HomePage.css';
import { getTask } from '../../utils/storage';

type Props = {
  tasks: {
    tasks: Array
  },
};

class HomePage extends Component<Props> {
  props: Props;


  openTask = (key) => {
    console.log(getTask(key))
  };

  render() {
    const tasks = this.props.tasks.tasks.map((task, index) =>
      (
        <TaskCard key={index} click={() => this.openTask(task.name)} name={task.name} desc={task.desc} time={task.time}/>
      )
    );

    return (
      <React.Fragment>
        <div className={styles.tasksGrid}>
          {tasks}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
};
export default connect(
  mapStateToProps, null)(HomePage);

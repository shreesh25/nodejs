import React, { Component } from "react";
import { reduxForm } from "redux-form";
import TaskForm from "./TaskForm";
import TaskReview from "./TaskReview";

class TaskNew extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return (
        <TaskReview onCancel={() => this.setState({ showReview: false })} />
      );
    }
    return (
      <TaskForm onTaskSubmit={() => this.setState({ showReview: true })} />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default reduxForm({
  form: "taskForm",
})(TaskNew);

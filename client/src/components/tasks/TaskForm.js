import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import TaskFields from "./TaskFields";
import { Link } from "react-router-dom";
class TaskForm extends Component {
  renderFields() {
    return (
      <div>
        <Field label="Email" type="text" name="email" component={TaskFields} />
        <Field
          label="Recovery Email"
          type="text"
          name="recoveryemail"
          component={TaskFields}
        />
        <Field
          label="Password"
          type="password"
          name="password"
          component={TaskFields}
        />
        <Field
          label="Security Answer"
          type="text"
          name="securityAnswer"
          component={TaskFields}
        />
        <Field label="Tasks" type="text" name="Task" component={TaskFields} />
        <Field
          label="Max Run time"
          type="text"
          name="maxRunTime"
          component={TaskFields}
        />
        <Field
          label="Min Run time"
          type="text"
          name="minRunTime"
          component={TaskFields}
        />
        <Field
          label="Max Sleep time"
          type="text"
          name="maxSleepTime"
          component={TaskFields}
        />
        <Field
          label="Min Sleep time"
          type="text"
          name="minSleepTime"
          component={TaskFields}
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <Link to="/tasks" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Create<i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "taskForm",
})(TaskForm);

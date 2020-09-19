import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";
const TaskReview = ({ onCancel, formValues, submitTask, history }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        <div>
          <label>Email:</label>
          <div>{formValues.mainEmail}</div>
        </div>
        <div>
          <label>Recovery Email:</label>
          <div>{formValues.recoveryEmail}</div>
        </div>
        <div>
          <label>Password:</label>
          <div>{formValues.password}</div>
        </div>
        <div>
          <label>Security Answer:</label>
          <div>{formValues.securityAnswer}</div>
        </div>
        <div>
          <label>Tasks:</label>
          <div>{formValues.tasks}</div>
        </div>
        <div>
          <label>Max Run Time:</label>
          <div>{formValues.maxRunTime}</div>
        </div>
        <div>
          <label>Min Run Time:</label>
          <div>{formValues.minRunTime}</div>
        </div>
        <div>
          <label>Max Sleep Time:</label>
          <div>{formValues.maxSleepTime}</div>
        </div>
        <div>
          <label>Min Sleep Time:</label>
          <div>{formValues.minSleepTime}</div>
        </div>
      </div>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
      <button
        onClick={() => submitTask(formValues, history)}
        className="green btn-flat right"
      >
        Confirm!<i className="material-icons right">event_available</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.taskForm.values,
  };
}
export default connect(mapStateToProps, actions)(withRouter(TaskReview));

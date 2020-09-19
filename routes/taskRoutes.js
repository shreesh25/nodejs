const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Tasks = mongoose.model("tasks");

module.exports = (app) => {
  app.post("/api/tasks", requireLogin, (req, res) => {
    const {
      email,
      password,
      securityAnswer,
      tasks,
      runTime,
      sleepTime,
    } = req.body;

    const task = new Tasks({
      email,
      password,
      securityAnswer,
      tasks,
      runTime,
      sleepTime,
      _user: req.user.id,
    });
  });
};

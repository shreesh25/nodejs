const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Tasks = mongoose.model("tasks");

module.exports = (app) => {
  app.post("/api/tasks", requireLogin, async (req, res) => {
    const {
      mainEmail,
      recoveryEmail,
      password,
      securityAnswer,
      tasks,
      maxRunTime,
      minRunTime,
      maxSleepTime,
      minSleepTime,
    } = req.body;

    const task = new Tasks({
      mainEmail,
      recoveryEmail,
      password,
      securityAnswer,
      tasks,
      maxRunTime,
      minRunTime,
      maxSleepTime,
      minSleepTime,
      _user: req.user.id,
    });

    try {
      await task.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};

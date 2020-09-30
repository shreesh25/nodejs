const cron = require("node-cron");
var task = "";

module.exports = (app) => {
  app.get("/app/schedulejob", (req, res, next) => {
    task = cron.schedule(
      "*/1 * * * *",
      () => {
        console.log("Task Scheduled");
      },
      {
        scheduled: false,
      }
    );
    return res.send({
      message: "Job Scheduled",
    });
  });

  app.get("/app/startjob", (req, res, next) => {
    task.start();
    return res.send({
      message: "Job started",
    });
  });

  app.get("/app/stopjob", (req, res, next) => {
    task.stop();
    return res.send({
      message: "Job Stopped",
    });
  });

  app.get("/app/destory", (res, req, next) => {
    task.destory();
    return res.send({
      message: "Job destroyed",
    });
  });

  app.get("/app/validate", (res, req, next) => {
    var valid = cron.validate("*/1 * * * *");
    return res({
      message: "valid",
    });
  });
};

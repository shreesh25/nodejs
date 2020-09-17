const mongoose = require("mongoose");
const { Schema } = mongoose;
require("mongoose-type-email");

const taskSchema = new Schema({
  email: {
    mainEmail: { type: mongoose.SchemaTypes.Email, required: true },
    recoveryEmail: { type: mongoose.SchemaTypes.Email, require: true },
  },
  password: { type: String, required: true },
  securityAnswer: { type: String, required: true },
  tasks: { type: String, required: true },
  runTime: { maxRunTime: Number, minRunTime: Number },
  sleepTime: { maxSleepTime: Number, minSleepTime: Number },
});

mongoose.model("tasks", tashSchema);

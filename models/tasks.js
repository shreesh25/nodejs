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
  tasks: { type: [String], required: true },
  runTime: {
    maxRunTime: { type: Number, default: 0 },
    minRunTime: { type: Number, default: 0 },
  },
  sleepTime: {
    maxSleepTime: { type: Number, default: 0 },
    minSleepTime: { type: Number, default: 0 },
  },
  _user: { type: Schema.Types.ObjectId, ref: "users" },
});

mongoose.model("tasks", taskSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;
require("mongoose-type-email");

const taskSchema = new Schema({
  mainEmail: { type: String, required: true },
  recoveryEmail: { type: String, require: true },

  password: { type: String, required: true },
  securityAnswer: { type: String, required: true },
  tasks: { type: [String], required: true },

  maxRunTime: { type: Number, default: 0 },
  minRunTime: { type: Number, default: 0 },

  maxSleepTime: { type: Number, default: 0 },
  minSleepTime: { type: Number, default: 0 },

  _user: { type: Schema.Types.ObjectId, ref: "users" },
});

mongoose.model("tasks", taskSchema);

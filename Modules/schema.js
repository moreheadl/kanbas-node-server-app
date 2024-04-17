import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String},
  description: { type: String},
  module: { type: String }
});
const moduleSchema = new mongoose.Schema({
    id: String,
    name: { type: String, required: true},
    description: String,
    course: String,
    lessons: [lessonSchema]
  },
  { collection: "modules" });
export default moduleSchema;
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Fight = new Schema(
  {
    title: { type: String, required: true },
    fighter1: { type: String, required: true },
    fighter2: { type: String, required: 2 },
    description: { type: String },
    date: { type: Date }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Fight;
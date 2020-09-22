import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Round = new Schema(
  {
    title: { type: String, required: true },
    fighter1: { type: String, required: true },
    score2: { type: String, required: 2 },
    description: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Round;
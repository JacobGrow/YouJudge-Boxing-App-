import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Round = new Schema(
  {
    roundNumber: { type: String, required: true },
    score1: { type: Number, required: true },
    score2: { type: Number, required: 2 },
    description: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Round;
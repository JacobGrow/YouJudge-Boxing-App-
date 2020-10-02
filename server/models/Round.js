import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId


const Round = new Schema(
  {
    roundNumber: { type: String, required: true },
    score1: { type: Number, required: true },
    score2: { type: Number, required: 2 },
    description: { type: String },
    fightId: {type: ObjectId }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Round.virtual("creator",
{
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
})

export default Round;
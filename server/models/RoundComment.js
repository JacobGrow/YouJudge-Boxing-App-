import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId


const Round = new Schema(
  {
    body: { type: String, required: true },
    roundId: {type: ObjectId },
    creatorEmail: { type: String, required: true },
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
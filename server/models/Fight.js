import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId


const Fight = new Schema(
  {
    title: { type: String, required: true },
    fighter1: { type: String, required: true },
    fighter2: { type: String, required: true },
    description: { type: String, required: true },
    rounds: [{type: ObjectId}],
    creatorEmail: { type: String, required: true },
    date: { type: Date }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Fight.virtual("creator",
{
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
})
export default Fight;
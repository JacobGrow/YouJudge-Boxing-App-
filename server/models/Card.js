import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

const Card = new Schema(
  {
    title: { type: String, required: true },
    fighter1: { type: String, required: true },
    fighter2: { type: String, required: 2 },
    description: { type: String },
    date: { type: Date },
    fights: [{type: ObjectId}],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Card.virtual("creator",
{
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
})

export default Card;
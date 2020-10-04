import mongoose from "mongoose";
import ProfileSchema from "../models/Profile";
import BoardSchema from '../models/Board'
import FightSchema from '../models/Fight'
import RoundSchema from '../models/Round'
class DbContext {
  Profile = mongoose.model("Profile", ProfileSchema);
  Boards = mongoose.model("Board", BoardSchema)
  Fights = mongoose.model("Fight", FightSchema)
  Rounds = mongoose.model("Round", RoundSchema)
}

export const dbContext = new DbContext();

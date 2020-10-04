import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class RoundsService {
  async find(userEmail) {
   return await dbContext.Rounds.find({ creatorEmail: userEmail}).populate("creator", "name picture")
  }
  async findById(id, userEmail) {
    let data = await dbContext.Rounds.findOne({ _id: id, creatorEmail: userEmail})
  }
  async findAll(query = {}) {
    let data = await dbContext.Rounds.find(query);
    return data
  }
  async create(rawData) {
    let data = await dbContext.Rounds.create(rawData)
    return data;
  }
  async edit(id, userEmail, update) {
    let data = await dbContext.Rounds.findOneAndUpdate({ _id: id, creatorEmail: userEmail}, update, { new: true})
    if (!data){
      throw new BadRequest("Invalid ID or you do not own this round")
    }
    return data;
  }
  async deleteRound(id, userEmail) {
    let data = await dbContext.Rounds.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this round")
    }
    return ("DELETED")
  }

}

export const roundsService = new RoundsService();
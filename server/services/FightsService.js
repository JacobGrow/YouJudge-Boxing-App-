import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class FightsService{
  async find(query = {}) {
   let data = await dbContext.Fights.find(query).populate(
     "creator",
     "name picture"
   );
   return data
  }
  async findById(id, userEmail) {
    let data = await dbContext.Fights.findOne({_id: id, creatorEmail: userEmail})
    if (!data){
      throw new BadRequest("Invalid ID or you do not own this fight")
    }
    return data
  }
  async create(rawData) {
    let data = await dbContext.Fights.create(rawData);
    return data
  }
  async edit(update) {
    let data = await dbContext.Fights.findOneAndUpdate( update.id, update, {new: true})
    if (!data){
      throw new BadRequest("Invalid ID or you do not own this fight.")
    }
    return data;
  }
  async deleteFight(id, userEmail) {
   let data = await dbContext.Fights.findOneAndRemove({_id: id, creatorEmail: userEmail})
   if(!data){
     throw new BadRequest("Invalid ID or you do not own this fight.")
   }
  }

}
export const fightsService = new FightsService();
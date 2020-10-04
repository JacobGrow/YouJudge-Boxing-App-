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
  findById(id) {
    throw new Error("Method not implemented.");
  }
  create(body) {
    throw new Error("Method not implemented.");
  }
  edit(body) {
    throw new Error("Method not implemented.");
  }
  deleteFight(id) {
    throw new Error("Method not implemented.");
  }






}
export const fightsService = new FightsService();
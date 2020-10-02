import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { fightsService } from "../services/FightsService"
import { roundsService } from "../services/RoundsService"

export class FightsController extends BaseController {
  constructor() {
    super("api/fights");
    this.router
    .get("", this.getAll)
    .get("/:id", this.getById)
    .get("/:id/rounds", this.getRoundsByFightId)
    .use(auth0Provider.getAuthorizedUserInfo)
    .post("", this.create)
    .put("/:id", this.edit)
    .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
   try {
     let data = await fightsService.find(req.query)
     return res.send(data)
   }
   catch (error) {
     next(error)
   }
  }
  async getById(req, res, next) {
    try{
      let data = await fightsService.findById(req.params.id)
      return res.send(data);
    } catch(error) {
      next(error)
    }
    
  }
  async getRoundsByFightId(req, res, next) {
    try {
      let data = await roundsService.findAll({fightId: req.params.id}) 
      return res.send(data)
    } catch(error){
      next(error)
    }
  }
  async create(req, res, next) {
   try {
     req.body.creatorEmail = req.userInfo.email;
     let data = await fightsService.create(req.body)
     res.send(req.body);
   } catch(error){
     next(error)
   }
  }
  async edit(req, res, next) {
    try{
      req.body.id = req.params.id
      let data = await fightsService.edit(req.body)
      return res.send(data)
    } catch(error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try{
      let data = await fightsService.deleteFight(req.params.id)
      return res.send("Deleted")
    } catch(error) {
      next(error)
    }
  }

}

import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { roundsService } from "../services/RoundsService"

export class RoundsController extends BaseController {
  constructor(){
    super("api/rounds");
    this.router
    .get("", this.getAll)
    .get("/:id", this.getById)
    .use(auth0Provider.getAuthorizedUserInfo)
    .post("", this.create)
    .put("/:id", this.edit)
    .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let data = await roundsService.find(req.query)
      return res.send(data)
    }
    catch (error) {
      next(error)
    }
   }
   async getById(req, res, next) {
     try{
       let data = await roundsService.findById(req.params.id)
       return res.send(data);
     } catch(error) {
       next(error)
     }
     
   }

   async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      let data = await roundsService.create(req.body)
      res.send(req.body);
    } catch(error){
      next(error)
    }
   }
   async edit(req, res, next) {
     try{
       req.body.id = req.params.id
       let data = await roundsService.edit(req.body)
       return res.send(data)
     } catch(error) {
       next(error)
     }
   }
   async delete(req, res, next) {
     try{
       let data = await roundsService.deleteRound(req.params.id)
       return res.send("Deleted")
     } catch(error) {
       next(error)
     }
   }
 
 }

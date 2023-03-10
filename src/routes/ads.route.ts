import { Router } from 'express';
import AdsController from '@/controllers/ads.controller';
import { CreateAdDto } from '@/exceptions/dtos/ads.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class AdsRoute implements Routes {
  public path = '/ads';
  public router = Router();
  public adscontroller = new AdsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.adscontroller.getAds);
    this.router.get(`${this.path}/:id(\\d+)`, this.adscontroller.getAdById);
    this.router.post(`${this.path}`, validationMiddleware(CreateAdDto, 'body'), this.adscontroller.createAd);
    // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    // this.router.delete(`${this.path}/:id(\\d+)`, this.usersController.deleteUser);
  }
}

export default AdsRoute;

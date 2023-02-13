import { Router } from 'express';
import AdsController from '@/controllers/ads.controller';
import { CreateUserDto } from '@/exceptions/dtos/users.dto';
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
    this.router.get(`${this.path}`, this.adscontroller.getUsers);
    // this.router.get(`${this.path}/:id(\\d+)`, this.usersController.getUserById);
    // this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
    // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    // this.router.delete(`${this.path}/:id(\\d+)`, this.usersController.deleteUser);
  }
}

export default AdsRoute;

import { NextFunction, Request, Response } from 'express';
// import { CreateAdDto } from '@/exceptions/dtos/ads.dto';
import AdsService from '@/services/ads.service';
import { Ad } from '@/interfaces/ads.interface';
import { CreateAdDto } from '@/exceptions/dtos/ads.dto';


class AdsController {
    public adsService = new AdsService()

    public getAds = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const findAllAdsData: Ad[] = await this.adsService.findAllAds();
    
          res.status(200).json({ data: findAllAdsData, message: 'findAll' });
        } catch (error) {
          next(error);
        }
      };


      public getAdById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const adId = Number(req.params.id);
          const findOneAdData: Ad = await this.adsService.findAdById(adId);
    
          res.status(200).json({ data: findOneAdData, message: 'findOne' });
        } catch (error) {
          next(error);
        }
      };


      public createAd = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const adData: CreateAdDto = req.body;
          const createAdData: Ad = await this.adsService.createAd(adData);
    
          res.status(201).json({ data: createAdData, message: 'created' });
        } catch (error) {
          next(error);
        }
      };
      
    


}


export default AdsController
import { NextFunction, Request, Response } from 'express';
// import { CreateAdDto } from '@/exceptions/dtos/ads.dto';
import AdsService from '@/services/ads.service';
import { Ad } from '@/interfaces/ads.interface';


class AdsController {
    public adsService = new AdsService()

    public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const findAllAdsData: Ad[] = await this.adsService.findAllAds();
    
          res.status(200).json({ data: findAllAdsData, message: 'findAll' });
        } catch (error) {
          next(error);
        }
      };


}


export default AdsController
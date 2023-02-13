import { EntityRepository, Repository } from 'typeorm';
import { HttpException } from '@exceptions/HttpException';
import { AdEntity } from '@/entities/ads.entity';
import { Ad } from '@/interfaces/ads.interface';
import { isEmpty } from '@utils/util';



class AdsService extends Repository<AdEntity>{
    // all ads
    public async findAllAds(): Promise<Ad[]>{
        const ads: Ad[] = await AdEntity.find();
        return ads;
    }

    // all by id
    public async findAdById(userId: number): Promise<Ad> {
        if (isEmpty(userId)) throw new HttpException(400, "AdId is empty");
    
        const findUser: Ad = await AdEntity.findOne({ where: { id: userId } });
        if (!findUser) throw new HttpException(409, "Ad doesn't exist");
    
        return findUser;
      }
}


export default AdsService
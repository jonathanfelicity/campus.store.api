import { EntityRepository, Repository } from 'typeorm';
import { AdEntity } from '@/entities/ads.entity';
import { Ad } from '@/interfaces/ads.interface';



class AdsService extends Repository<AdEntity>{
    public async findAllAds(): Promise<Ad[]>{
        const ads: Ad[] = await AdEntity.find();
        return ads;
    }
}


export default AdsService
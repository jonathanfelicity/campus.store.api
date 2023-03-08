import { EntityRepository, Repository } from 'typeorm';
import { HttpException } from '@exceptions/HttpException';
import { AdEntity } from '@/entities/ads.entity';
import { Ad } from '@/interfaces/ads.interface';
import { isEmpty } from '@utils/util';
import { CreateAdDto } from '@/exceptions/dtos/ads.dto';



class AdsService extends Repository<AdEntity>{

  // all ads
  public async findAllAds(): Promise<Ad[]> {
    const ads: Ad[] = await AdEntity.find();
    return ads;
  }

  // all by id
  public async findAdById(adId: number): Promise<Ad> {
    if (isEmpty(adId)) throw new HttpException(400, "AdId is empty");

    const findAd: Ad = await AdEntity.findOne({ where: { id: adId } });
    if (!findAd) throw new HttpException(409, "Ad doesn't exist");

    return findAd;
  }

  // creating add
  public async createAd(adData: CreateAdDto): Promise<Ad> {
    if (!adData) {
      throw new HttpException(400, "Ad data is empty");
    }

    try {
      const createdAd = await AdEntity.create(adData).save();
      return createdAd;
    } catch (error) {
      throw new HttpException(500, `Could not create ad: ${error.message}`);
    }
  }

  
}


export default AdsService
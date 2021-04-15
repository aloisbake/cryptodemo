import { HttpService, Injectable } from '@nestjs/common';
import { Crypto } from './interfaces/crypto.interface'

@Injectable()
export class CryptosService {
    apiUrl: string = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,BCH,ETC&tsyms=USD,GBP,EUR,JPY,ZAR&api_key=5eaf586d3723d147d5408246364e02afadf0e648ca1dd3ba1aefe36cba24c9be'
    constructor(private readonly httpService: HttpService){ }
    
async findAll(): Promise<Crypto[]> {
          const response = await this.httpService.get(this.apiUrl).toPromise();
          return response.data;
    }

}

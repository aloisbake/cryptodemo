import { Controller, Get } from '@nestjs/common';
import { CryptosService } from './cryptos.service';
import { Crypto } from './interfaces/crypto.interface'

@Controller('cryptos')
export class CryptosController {
    constructor(private readonly cryptoService: CryptosService){}
    @Get()
   async getCryptos(): Promise<Crypto[]> {
        return this.cryptoService.findAll();
    }
}

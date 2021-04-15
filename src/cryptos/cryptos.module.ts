import { HttpModule, Module } from '@nestjs/common';
import { CryptosController } from './cryptos.controller';
import { CryptosService } from './cryptos.service';

@Module({
  imports: [
    HttpModule.register({      
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [CryptosController],
  providers: [CryptosService]
})
export class CryptosModule {}

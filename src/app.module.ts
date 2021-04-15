import { Module } from '@nestjs/common';
import { CryptosModule } from './cryptos/cryptos.module';

@Module({
  imports: [CryptosModule],
})
export class AppModule {}

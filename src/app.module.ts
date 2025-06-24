import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PrModule } from './pr/pr.module';  // your PR feature module

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // <-- make sure your static files are here
      exclude: ['/pr*'], // exclude API routes from static serving
    }),
    PrModule,  // import your PR module here
  ],
})
export class AppModule {}

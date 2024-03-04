import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:admin@127.0.0.1:27017/nest_crud?directConnection=true&serverSelectionTimeoutMS=2000&authSource=admin&appName=mongosh+2.1.5',
    ),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


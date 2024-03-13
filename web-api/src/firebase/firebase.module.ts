import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from './firebase.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';

const userSchema = MongooseModule.forFeature([
  {
    name: User.name,
    schema: UserSchema
  }
]);

@Module({
  controllers: [],
  imports: [ConfigModule, userSchema],
  providers: [FirebaseService],
  exports: [FirebaseService, userSchema],
})
export class FirebaseModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { UserEntity } from './users/entities/user.entity';
import { EntityFile } from './files/entities/file.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'snuffleupagus.db.elephantsql.com',
      port: 5432,
      username: 'gekcxlzg',
      password: 'TDc_7DIS4ez3aXEn_jQqPmtK-F3wlmqu',
      database: 'gekcxlzg',
      entities: [UserEntity, EntityFile],
      synchronize: true,
    }),
    UsersModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

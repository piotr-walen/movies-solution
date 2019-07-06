import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { ConfigModule } from '../config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), ConfigModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}

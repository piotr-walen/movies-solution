import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Rating } from './ratings/ratings.entity';
import { Transform, Type } from 'class-transformer';
import * as moment from 'moment';

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Title: string;

  @Column()
  @Type(() => Number)
  @Transform(value => parseInt(value, 10), { toClassOnly: true })
  Year: number;

  @Column()
  Rated: string;

  @Column()
  Released: string;

  @Column()
  Runtime: string;

  @Column()
  Genre: string;

  @Column()
  Director: string;

  @Column()
  Writer: string;

  @Column()
  Actors: string;

  @Column()
  Plot: string;

  @Column()
  Language: string;

  @Column()
  Country: string;

  @Column()
  Awards: string;

  @Column()
  Poster: string;

  @ManyToOne(type => Rating, rating => rating.movie)
  Ratings: Rating[];

  @Column()
  Metascore: number;

  @Column()
  imdbRating: number;

  @Column()
  imdbVotes: number;

  @Column()
  imbdID: string;

  @Column()
  Type: string;

  @Column()
  @Type(() => Date)
  @Transform(value => moment(value), { toClassOnly: true })
  DVD: Date;

  @Column()
  BoxOffice: string;

  @Column()
  Production: string;

  @Column()
  Website: string;

  @Column()
  Response: boolean;
}

import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('dictionary')
@Unique(['name'])
export class DictionaryEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    name: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dictionary")
export class DictionaryEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    name: string;
}
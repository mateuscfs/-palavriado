import { getRepository, InsertResult } from 'typeorm';
import { DictionaryEntity } from '../database/entities/Dictionary';
import { DictionaryInterface } from '../interfaces/dictionary';

export const create = (data: DictionaryInterface[]): Promise<InsertResult> => {
    const repository = getRepository(DictionaryEntity);
    const entity = repository.create(data);

    return repository
        .createQueryBuilder()
        .insert()
        .into(DictionaryEntity)
        .values(entity)
        .onConflict(`(name) DO NOTHING`)
        .returning('*')
        .execute();
};

export const getAll = (): Promise<DictionaryInterface[]> => {
    const repository = getRepository(DictionaryEntity);
    return repository.find();
};

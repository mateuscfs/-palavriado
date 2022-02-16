import { getRepository } from "typeorm"
import { DictionaryEntity } from "../database/entities/Dictionary"
import { Dictionary } from "../interfaces/dictionary";


export const create = (data: Dictionary[]) => {
    const repository = getRepository(DictionaryEntity);
    const entity = repository.create(data);

    return repository.save(entity);
}
import { DictionaryInterface } from '../interfaces/dictionary';
import { create, getAll } from '../repository/dictionary';
import { buildWordsObject } from '../utils/dictionary/builder';

export const createDictionary = async (
    words: string[],
): Promise<{ data: Record<string, unknown>[] | string }> => {
    const data = buildWordsObject(words);

    const res = await create(data);

    if (res.raw.length === 0)
        return { data: 'Palavra(s) já existe(m) no dicionário!' };

    return { data: res.raw };
};

export const getAllDictionary = async (): Promise<{
    data: DictionaryInterface[];
}> => {
    return { data: await getAll() };
};

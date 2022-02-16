import { create } from "../repository/dictionary";
import { buildWordsObject } from "../utils/dictionary/builder";

export const createDictionary = async (words: string[]) => {
    const data = buildWordsObject(words);

    return create(data);
}
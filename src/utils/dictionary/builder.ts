import { DictionaryInterface } from '../../interfaces/dictionary';

export const buildWordsObject = (data: string[]): DictionaryInterface[] => {
    const words: DictionaryInterface[] = [];

    data.forEach((word: string) => {
        if (word.length === 5) {
            words.push({ name: word.toLowerCase() });
        }
    });

    return words;
};

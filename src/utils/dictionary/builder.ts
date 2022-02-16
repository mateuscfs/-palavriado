import { Dictionary } from "../../interfaces/dictionary";

export const buildWordsObject = (data: string []): Dictionary[] => {
    const words: Dictionary[] = [];
    
    data.forEach((word: string) => {
        if (word.length === 5) {
            words.push({ name: word.toLowerCase() });
        }

    })

    return words;
}
import Translate from "./interfaces/translate";
declare class DiverstTranslaty implements Translate {
    apiKey: string;
    projectId: string;
    targetLanguage: string;
    textToTranslate: string;
    private client;
    constructor(projectID: string, apiKey: string);
    translateText(textToTranslate: string, targetLanguage: string): Promise<string>;
    createClientObj(): void;
}
export { DiverstTranslaty, };

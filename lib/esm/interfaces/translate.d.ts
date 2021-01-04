interface Translate {
    projectId: string;
    apiKey: string;
    textToTranslate: string;
    targetLanguage: string;
    translateText: (textToTranslate: string, targetLanguage: string) => Promise<string>;
    createClientObj: (apiKey: string, projectId: string) => void;
}
export default Translate;

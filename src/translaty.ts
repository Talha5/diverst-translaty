import { v2 } from '@google-cloud/translate';
import Translate from "./interfaces/translate";

class DiverstTranslaty implements Translate {
  apiKey: string;
  projectId: string;
  targetLanguage: string;
  textToTranslate: string;
  private client: any;

  constructor(projectID: string, apiKey: string) {
    this.projectId = projectID;
    this.apiKey = apiKey;
    this.targetLanguage = '';
    this.textToTranslate = '';

    if(!String(this.projectId)) throw Error('Project ID not found.');
    if(!String(this.apiKey)) throw Error('Api Key not found.');

    this.createClientObj();
  }

  async translateText(textToTranslate: string, targetLanguage: string):Promise<string> {
    this.textToTranslate = textToTranslate;
    this.targetLanguage = targetLanguage;

    try {
      return await this.client.translate(this.textToTranslate, this.targetLanguage);
    } catch (error) {
      throw Error(error.errors[0].message);
    }
  }

  createClientObj():void {
    this.client = new v2.Translate({
      projectId: this.projectId,
      key: this.apiKey
    });
  }
}

export {
  DiverstTranslaty,
}

import { v2 } from '@google-cloud/translate';

class DiverstTranslaty {
  projectId: string;
  apiKey: string;
  client: any;

  constructor(projectID: string, apiKey: string) {
    if(!String(projectID)) throw Error('Project ID not found.');
    if(!String(apiKey)) throw Error('Api Key not found.');

    this.projectId = projectID;
    this.apiKey = apiKey;
    this.client = new v2.Translate({
      projectId: this.projectId,
      key: this.apiKey
    });
  }

  async translate(text: string, target: string) {
    try {
      return await this.client.translate(text, target);
    } catch (error) {
      throw Error(error.errors[0].message);
    }
  }
}

export {
  DiverstTranslaty,
}

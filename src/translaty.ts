class DiverstTranslaty {
  projectId: string;
  apiKey: string;
  client: any;

  constructor(projectID: string, apiKey: string) {
    if(!String(projectID)){
      throw Error('Project ID not found.')
    }else{
      this.projectId = projectID;
    }
    if(!String(apiKey)){
      throw Error('Api Key not found.')
    }else{
      this.apiKey = apiKey;
    }

    const { Translate } = require('@google-cloud/translate').v2;
    this.client = new Translate({
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

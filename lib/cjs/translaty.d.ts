declare class DiverstTranslaty {
    projectId: string;
    apiKey: string;
    client: any;
    constructor(projectID: string, apiKey: string);
    translate(text: string, target: string): Promise<any>;
}
export { DiverstTranslaty, };

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { v2 } from '@google-cloud/translate';
class DiverstTranslaty {
    constructor(projectID, apiKey) {
        if (!String(projectID))
            throw Error('Project ID not found.');
        if (!String(apiKey))
            throw Error('Api Key not found.');
        this.projectId = projectID;
        this.apiKey = apiKey;
        this.client = new v2.Translate({
            projectId: this.projectId,
            key: this.apiKey
        });
    }
    translate(text, target) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.client.translate(text, target);
            }
            catch (error) {
                throw Error(error.errors[0].message);
            }
        });
    }
}
export { DiverstTranslaty, };

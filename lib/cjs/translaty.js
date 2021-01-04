"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiverstTranslaty = void 0;
const translate_1 = require("@google-cloud/translate");
class DiverstTranslaty {
    constructor(projectID, apiKey) {
        this.projectId = projectID;
        this.apiKey = apiKey;
        this.targetLanguage = '';
        this.textToTranslate = '';
        if (!String(this.projectId))
            throw Error('Project ID not found.');
        if (!String(this.apiKey))
            throw Error('Api Key not found.');
        this.createClientObj();
    }
    translateText(textToTranslate, targetLanguage) {
        return __awaiter(this, void 0, void 0, function* () {
            this.textToTranslate = textToTranslate;
            this.targetLanguage = targetLanguage;
            try {
                return yield this.client.translate(this.textToTranslate, this.targetLanguage);
            }
            catch (error) {
                throw Error(error.errors[0].message);
            }
        });
    }
    createClientObj() {
        this.client = new translate_1.v2.Translate({
            projectId: this.projectId,
            key: this.apiKey
        });
    }
}
exports.DiverstTranslaty = DiverstTranslaty;

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
class DiverstTranslaty {
    constructor(projectID, apiKey) {
        if (!String(projectID)) {
            throw Error('Project ID not found.');
        }
        else {
            this.projectId = projectID;
        }
        if (!String(apiKey)) {
            throw Error('Api Key not found.');
        }
        else {
            this.apiKey = apiKey;
        }
        const { Translate } = require('@google-cloud/translate').v2;
        this.client = new Translate({
            projectId: this.projectId,
            key: this.apiKey
        });
    }
    translate(text, target) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const translation = yield this.client.translate(text, target);
                return translation;
            }
            catch (error) {
                throw Error(error.errors[0].message);
            }
        });
    }
}
exports.DiverstTranslaty = DiverstTranslaty;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSecretsFromAWS = void 0;
const aws_sdk_1 = require("aws-sdk");
async function getSecretsFromAWS() {
    const client = new aws_sdk_1.SecretsManager({ region: 'your-region' });
    const secretId = 'your-secret-id';
    const secret = await client.getSecretValue({ SecretId: secretId }).promise();
    return JSON.parse(secret.SecretString || '{}');
}
exports.getSecretsFromAWS = getSecretsFromAWS;
//# sourceMappingURL=aws-secrets.js.map
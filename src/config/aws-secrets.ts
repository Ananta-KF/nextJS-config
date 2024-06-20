import { SecretsManager } from 'aws-sdk';

export async function getSecretsFromAWS(): Promise<Record<string, any>> {
  const client = new SecretsManager({ region: 'your-region' });
  const secretId = 'your-secret-id';

  const secret = await client.getSecretValue({ SecretId: secretId }).promise();
  return JSON.parse(secret.SecretString || '{}');
}

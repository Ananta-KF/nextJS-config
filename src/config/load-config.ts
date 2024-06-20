import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as deepmerge from 'deepmerge';
import { validate } from './app-config.schema';
// import { getSecretsFromAWS } from './aws-secrets'; // Uncomment for testing with AWS

export async function loadConfigurations(): Promise<Record<string, any>> {
  const sources = process.env.CONFIG_SOURCES?.split(',') || [];
  let config = {};

  if (sources.includes('json')) {
    const jsonConfig = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    config = deepmerge(config, jsonConfig);
  }

  if (sources.includes('yaml')) {
    const yamlConfig = yaml.load(fs.readFileSync('config.yml', 'utf8')) as Record<string, any>;
    config = deepmerge(config, yamlConfig);
  }

  // if (sources.includes('aws')) {
  //   const awsConfig = await getSecretsFromAWS();
  //   config = deepmerge(config, awsConfig);
  // }

  return validate(config);
}

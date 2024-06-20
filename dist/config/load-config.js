"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfigurations = void 0;
const fs = require("fs");
const yaml = require("js-yaml");
const deepmerge = require("deepmerge");
const app_config_schema_1 = require("./app-config.schema");
async function loadConfigurations() {
    var _a;
    const sources = ((_a = process.env.CONFIG_SOURCES) === null || _a === void 0 ? void 0 : _a.split(',')) || [];
    let config = {};
    if (sources.includes('json')) {
        const jsonConfig = JSON.parse(fs.readFileSync('config.json', 'utf8'));
        config = deepmerge(config, jsonConfig);
    }
    if (sources.includes('yaml')) {
        const yamlConfig = yaml.load(fs.readFileSync('config.yml', 'utf8'));
        config = deepmerge(config, yamlConfig);
    }
    return (0, app_config_schema_1.validate)(config);
}
exports.loadConfigurations = loadConfigurations;
//# sourceMappingURL=load-config.js.map
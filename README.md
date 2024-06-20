
# Dynamic Configuration Loader for NestJS

This project demonstrates a dynamic configuration loader for a NestJS application. The configurations are loaded from multiple sources, including JSON, YAML, and (optionally) AWS Secrets Manager. This setup ensures a flexible and robust configuration management system.

## Features

- Load configurations from `config.json`, `config.yml`, and AWS Secrets Manager.
- Validate configurations using `class-validator`.
- Dynamically fetch configuration keys.

## Prerequisites

- Node.js
- npm
- AWS account (for AWS Secrets Manager)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Configuration

### Environment Variables

Set the `CONFIG_SOURCES` environment variable to specify the configuration sources:
```bash
export CONFIG_SOURCES=json,ymml,aws
```

### AWS Secrets Manager

To fetch secrets from AWS Secrets Manager, configure your AWS credentials and update `aws-secrets.ts` with your region and secret ID.

### Example Configuration Files

**config.json**:
```json
{
  "PORT": 3000,
  "MODE": "PROD",
  "RUN_MIGRATIONS": true,
  "OTEL_EXPORTER_OTLP_ENDPOINT": "http://localhost:3000",
  "LOG_LEVEL": "debug"
}
```

**config.yml**:
```yaml
PORT: 3000
MODE: DEV
RUN_MIGRATIONS: true
OTEL_EXPORTER_OTLP_ENDPOINT: http://localhost:4317
LOG_LEVEL: debug
```

## Running the Application

1. Build the project:
    ```bash
    npm run build
    ```

2. Start the project:
    ```bash
    npm run start
    ```

## Usage

The application loads configurations from the specified sources and merges them. You can access the configurations dynamically.

# project-template

## Configuration

### Linting

Please ensure you have a `.vscode` folder containing a `settings.json` file, with the following configuration:

```json
{
  "eslint.experimental.useFlatConfig": true
}
```

As of April 21, 2024, if you do not set the `eslint.experimental.useFlatConfig` flag to `true`, the ESLint extension for VS Code will not lint code properly when using ESLint's new flat config system.

Moving forward, this should only be required until the ESLint extension for VS Code is updated to fully support the new format.

See [ESLint's migration guide](https://eslint.org/docs/latest/use/configure/migration-guide) for more information.
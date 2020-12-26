# Diverst Translaty

Internal implementation for Google Translate API.

## Installation

Use the package manager [npm](https://npmjs.com) to install foobar.

```bash
npm install diverst-translaty
```

## Usage

```typescript
import { DiverstTranslaty } from 'diverst-translaty';

const client = DiverstTranslaty.new(projectId, apiKey)
client.translate('text to translate', 'ch') # takes in two args: text and target lang

client.listSupportedLanguages();

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

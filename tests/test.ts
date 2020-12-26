import { DiverstTranslaty } from '../src/index';
import { expect } from 'chai';
import * as faker from 'faker';

describe('DiverstTranslaty client', () => {
  it('checks project id presence', () => {
    expect(() => new DiverstTranslaty('', faker.random.uuid())).to.throw('Project ID not found.');
  });

  it('checks api key presence', () => {
    expect(() => new DiverstTranslaty(faker.random.uuid(), '')).to.throw('Api Key not found.');
  });
});

describe('DiverstTranslaty translates',  () => {
  it('throws error if credentials are invalid', async () => {
    const client = new DiverstTranslaty(faker.random.uuid(), faker.random.uuid());
    await client.translate('Hello, world!', 'fr')
    .catch((err) => {
      expect(err.message).to.be.eq('API key not valid. Please pass a valid API key.')
    });
  });
});

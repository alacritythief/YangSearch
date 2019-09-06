import { PolicyData } from './policy';

it('Expects all name, url, category, keywords fields to exist', () => {
  expect(PolicyData).toEqual(
    expect.arrayContaining(
      [
        expect.objectContaining({
          name: expect.any(String),
          url: expect.any(String),
          category: expect.any(String),
          keywords: expect.any(Array)
        })
      ]
    )
  )
});
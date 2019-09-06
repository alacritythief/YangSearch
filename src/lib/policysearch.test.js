import { policySearch } from './policysearch';

// Testing for policy search

it('Expects freedom dividend policy from UBI keyword', () => {
  expect(policySearch('ubi')).toEqual(
    expect.arrayContaining(
      [
        expect.objectContaining({
          name: 'The Freedom Dividend'
        })
      ]
    )
  )
});

it('Expects 3 different policies from 3 different search terms', () => {
  expect(policySearch('freedom dividend, medicare for all, democracy dollars')).toEqual(
    expect.arrayContaining(
      [
        expect.objectContaining({
          name: 'The Freedom Dividend'
        })
      ],
      [
        expect.objectContaining({
          name: 'Medicare for All'
        })
      ],
      [
        expect.objectContaining({
          name: 'Democracy Dollars'
        })
      ]
    )
  )
});

it('Expects related policies under the education category', () => {
  expect(policySearch('education')).toEqual(
    expect.arrayContaining(
      [
        expect.objectContaining({
          name: 'Reduce Student Loan Burden'
        })
      ],
      [
        expect.objectContaining({
          name: 'Make Community College Affordable for All'
        })
      ],
      [
        expect.objectContaining({
          name: 'Control the Cost of Higher Education'
        })
      ]
    )
  )
});
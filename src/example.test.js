import { expect } from 'chai'

import fizzbuzz from './example'

describe('#fizzbuzz example', () => {
  it ("returns the number", () => {
    const actual = fizzbuzz(1)
    expect(actual).to.eql(1)
  })
})

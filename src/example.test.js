import { expect } from 'chai'

import fizzbuzz from './example'

describe('#fizzbuzz example', () => {
  describe('when the number is not a multiple of 3 or 5', () => {
    it ("returns the number", () => {
      const cases = [fizzbuzz(1), fizzbuzz(2), fizzbuzz(17)]

      expect(cases[0]).to.eql(1)
      expect(cases[1]).to.eql(2)
      expect(cases[2]).to.eql(17)
    })
  })
  
  describe('when number is multiple of 3', () => {
    it(`returns 'fizz'`, () => {
      const cases = [fizzbuzz(3), fizzbuzz(6), fizzbuzz(9)]

      cases.forEach(actual => {
        expect(actual).to.eql('fizz')
      })
    })
  })

  describe('when number is multiple of 5', () => {
    it(`returns 'buzz'`, () => {
      const cases = [fizzbuzz(5), fizzbuzz(25), fizzbuzz(50)]

      cases.forEach(actual => {
        expect(actual).to.eql('buzz')
      })
    })
  })

  describe('when the number is a multiple of 3 & 5', () => {
    it(`returns 'fizzbuzz'`, () => {
      const cases = [fizzbuzz(15), fizzbuzz(30), fizzbuzz(75)]

      cases.forEach(actual => {
        expect(actual).to.eql('fizzbuzz')
      })
    })
  })

  // Extra Credit: Support for edge/exceptional cases:
  describe.skip('when parameter is not a number', () => {
    it('throws an Error', () => {
      const errMessage = 'Parameter must be an integer'

      expect(() => fizzbuzz('rick-and-morty')).to.throw(Error, errMessage)
      expect(() => fizzbuzz(true)).to.throw(Error, errMessage)
      expect(() => fizzbuzz({})).to.throw(Error, errMessage)
    })
  })
})

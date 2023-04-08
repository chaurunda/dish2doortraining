import {
  deepEqual,
  getFormattedTime,
  getRandomInt,
  getTimeInMilliseconds,
  getTimeInMinutes,
  getTimeInSeconds,
} from './utils'
import { anotherBigObject, bigObject, smallObject } from './utils.mock'

describe('Test for utils', () => {
  it('should generate random number each time getRandomInt is called', () => {
    //arrange
    const randomNumber1 = getRandomInt(0, 5)
    const randomNumber2 = getRandomInt(0, 5)
    //act
    const isEqual = randomNumber1 === randomNumber2

    //assert
    expect(isEqual).toBe(false)
    expect(randomNumber1).toBeGreaterThanOrEqual(0)
    expect(randomNumber1).toBeLessThanOrEqual(5)
    expect(randomNumber2).toBeGreaterThanOrEqual(0)
    expect(randomNumber2).toBeLessThanOrEqual(5)
  })

  it('should compare 2 object', () => {
    //arrange
    const obj1 = bigObject
    const obj2 = bigObject
    //act
    const isEqual = deepEqual(obj1, obj2)
    const isStilLEqual = deepEqual(obj1, anotherBigObject)
    const hereIsEqual = deepEqual(obj1, smallObject)
    //assert
    expect(isEqual).toBe(true)
    expect(isStilLEqual).toBe(false)
    expect(hereIsEqual).toBe(false)
  })

  it('should givenu formatted time', () => {
    //arrange
    const time = 62390
    //act
    const timeInMilliseconds = getTimeInMilliseconds(time)
    const timeInSeconds = getTimeInSeconds(time)
    const timeInMinutes = getTimeInMinutes(time)
    const formattedTime = getFormattedTime(time)
    //assert
    expect(timeInMilliseconds).toBe('39')
    expect(timeInSeconds).toBe('02')
    expect(timeInMinutes).toBe('01')
    expect(formattedTime).toBe('01:02.39')
  })
})

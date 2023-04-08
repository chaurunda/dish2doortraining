export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

export function deepEqual(object1: any, object2: any) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (const key of keys1) {
    const val1 = object1[key]
    const val2 = object2[key]
    const areObjects = isObject(val1) && isObject(val2)
    if ((areObjects && !deepEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
      return false
    }
  }
  return true
}

function isObject(object: any) {
  return object != null && typeof object === 'object'
}

export function getTimeInMinutes(time: number) {
  // For some reason, if I wish to use `` on the next string, it will slow the timer
  return ('0' + Math.floor((time / 60000) % 60)).slice(-2)
}

export function getTimeInSeconds(time: number) {
  return ('0' + Math.floor((time / 1000) % 60)).slice(-2)
}

export function getTimeInMilliseconds(time: number) {
  return ('0' + ((time / 10) % 100)).slice(-2)
}

export function getFormattedTime(time: number) {
  return `${getTimeInMinutes(time)}:${getTimeInSeconds(time)}.${getTimeInMilliseconds(time)}`
}

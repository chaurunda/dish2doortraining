export const getLocalStorage = (store: string): string | null => {
  return localStorage.getItem(store)
}

export const setLocalStorage = (store: string, value: string): void => {
  const localValue = getLocalStorage(store)
  const formattedValue = localValue ? `${localValue}, ${value}` : value
  localStorage.setItem(store, formattedValue)
}

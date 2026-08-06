export function getStorageData<T>(key: string): T[] | [] {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) as T[] : [];
}

export function setStorageData<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
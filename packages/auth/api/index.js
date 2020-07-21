export function request(url, method, body) {
  return fetch(url, { method: method || 'GET', body, headers: { 'Content-Type': 'application/json' } })
}

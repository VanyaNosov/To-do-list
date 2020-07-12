// function f(url, method, body) {
//   return fetch(url)
// }

// f('http://localhost:3000/hello', 'GET', { hello: 'world' })
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// const url = 'http://localhost:3000/';
// // function fatch(url, method, body) {
// //   return
// // }
// const xhr = new XMLHttpRequest()
// xhr.open('GET', url)
// xhr.send()

// JSON.stringify({});
// connect body - parser package to server as middleware.
export function request(url, method, body) {
  return fetch(url, { method: method || 'GET', body, headers: { 'Content-Type': 'application/json' } })
}

// fetc('http://localhost:3000/sign_up', 'POST', JSON.stringify({ email: 'nosov582125@gmail.com', password: 'vanya1155', firstName: 'Galya', lastName: 'Pasha' }))
  // .then(data => console.log(data))
  // .catch(err => console.log(err))

// const requestURL = 'http://localhost:3000'

// function sendRequest(method, url, body = null) {
//   const headers = {
//     'Content-Type': 'application/json'
//   }

//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers
//   }).then(response => {
//     if (response.ok) {
//       return response.json()
//     }

//     return response.json().then(error => {
//       const e = new Error('Что-то пошло не так')
//       e.data = error
//       throw e
//     })
//   })
// }

// sendRequest('GET', 'http://localhost:3000/hello')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// const body = {
//   name: 'Vladilen',
//   age: 26
// }

// sendRequest('POST', requestURL, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
// const requestURL = 'http://localhost:3000'

// function sendRequest(method, url, body = null) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()

//     xhr.open(method, url)

//     xhr.responseType = 'json'
//     xhr.setRequestHeader('Content-Type', 'application/json')

//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response)
//       } else {
//         resolve(xhr.response)
//       }
//     }

//     xhr.onerror = () => {
//       reject(xhr.response)
//     }

//     xhr.send(JSON.stringify(body))
//   })
// }

// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// const body = {
//   name: 'Vladilen',
//   age: 26
// }

// app.use('http://localhost:3500/hello', function (req, res, next) {
//   console.log('Request URL:', req.originalUrl);
//   next();
// }, function (req, res, next) {
//   console.log('Request Type:', req.method);
//   next();
// });

// app.use('http://localhost:3000/', function (req, res, next) {
//   console.log('Request URL:', req.originalUrl);
//   next();
// }, function (req, res, next) {
//   console.log('Request Type:', req.method);
//   next();
// });
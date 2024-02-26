export interface Post {
  "id": string,
  "userId": string,
  "picture": string,
  "title": string,
  "content": string
}

export interface User {
  "id": string,
  "title": string,
  "isActive": boolean,
  "picture": string,
  "age": string,
  "gender": string,
  "company": string,
  "email": string,
  "phone": string,
  "address": string
}

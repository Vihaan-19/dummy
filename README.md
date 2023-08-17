
# Social Media Backend

A social media backend made using NodeJS, Express, and MongoDB.
Final Task of GeekHaven WebD Wing.




## Documentation

- [Features](#features)
- [Installation](#installation)
- [API](#api%20reference)
- [Optimizations](#optimizations)




## Features

- User Authentication and Authorization
- Registration and Login
- User Profile updates
- Create, upload, edit a post
- Like and dislike a post
- Follow/Unfollow an User
- Cross platform
- Create, upload reels
- Comment on post and reels



## Installation

Clone the project

```bash
git clone https://github.com/Vihaan-19/WebD-Selection-Final-Task.git geekh
cd geekh
```

Go to the project directory

```bash
cd geekh
```

Install dependencies

```bash
npm install
```

Start the server

```bash
nodemon app.js
```


## API Reference

#### Sign Up

```http
  POST /api/auth/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


```http
  POST /api/auth/login
```

#### Login
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |




```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility


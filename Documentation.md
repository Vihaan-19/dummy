
# Uploading images
### Installed multer, multer-gridfs
- The frontend should take the image from the use and upload it to uploads folder

# Features
- Authorisation and Authentication of user with JWT
- HTTP security using helmet
- User:- delete, search, follow, unfollow
- Post:- create, update, delete, search, like/dislike, get all posts
- Add comments to a post
- Reels:- create, search, like/dislike
- Add comments to a reel

Routes




Bugs
Post not being created (error 500) when category not specified
in follow unfollow, currentUser getting null(why?)

<---------Main Documentation-------------->

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

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


#### Login

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




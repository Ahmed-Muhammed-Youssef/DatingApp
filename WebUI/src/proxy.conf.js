const PROXY_CONFIG = [
    {
    context: [
        "/api/users/all",
        "/api/users/info/id",
        "/api/users/info/username",
        "/api/users/update",
        "/api/users/photo/delete",
        "/api/users/photo/upload",
        "/api/users/photos/reorder",
        "/api/users/photos/all",
        "/api/account/login",
        "/api/account/register",
        "/api/like",
        "/api/like/isliked",
        "/api/like/liked",
        "/api/matches",
        "/api/matches/ismatch",
        "/api/messages",
        "/api/messages/inbox/",
        "/api/roles/all",
        "/api/roles/create",
        "/api/roles/add",
        "/api/roles/removefrom",
        "/api/roles/delete",
        "/api/roles/user",
        "/api/roles/users-roles/all",
        "/api/buggy/server-error",
        "/api/buggy/not-found",
        "/api/buggy/auth",
        "/api/buggy/bad-request"
      ],
      target: "https://localhost:5001",
      secure: false
    }
  ]
  
  module.exports = PROXY_CONFIG;

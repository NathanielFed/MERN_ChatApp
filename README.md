# MERN_ChatApp
CSDC105 Finals

create a .env file and add this: {
  MONGODB_URI= mongodb+srv://nfederis:LONaihMnsntwOrS1@cluster0.jcrm0cu.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0
  # Username: nfederis
  # Password: LONaihMnsntwOrS1
  
  PORT=5001
  JWT_SECRET=mysecretkey

  CLOUDINARY_CLOUD_NAME= dihya9i3a
  CLOUDINARY_API_KEY= 319954798465165
  CLOUDINARY_API_SECRET= UBS0HlBf_IBs0AvMT9Ws-gRP370

  NODE_ENV=development
}

"scripts": {
    "build": "npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend",
    "start": "npm run start --prefix backend"
  }

When running the app, use "npm run dev" on both backend and frontend folders. MUST RUN THE COMMAND ON THE BACKEND FIRST

Documentation link:
https://docs.google.com/document/d/10GkjLBc9HRz4gO_H4btnQUgfmsWuuwADJuPLGvkegXU/edit?usp=sharing
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET || "secret_key",
  mongoUri:"mongodb+srv://toidungdau1M:toidungdau1M@cluster0.x943k.mongodb.net/mern-app?retryWrites=true&w=majority"
}

export default config

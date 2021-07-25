import mongoose from 'mongoose'

// Модель + схема для пользователей
const User = mongoose.model('User', {
  username: { type: String, required: true, trim: true },
  email: { type: String, unique: true, required: true, trim: true },
  password: { type: String, required: true },
  registration: { type: Date, default: Date.now() }
});

export default User
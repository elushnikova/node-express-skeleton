import mongoose from 'mongoose'

// Модель + схема для пользователей
const User = mongoose.model('User', {
  username: { type: String, required: true, trim: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export default User
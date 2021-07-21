import session from 'express-session'
import sessionFileSrore from 'session-file-store'

const FileStore = sessionFileSrore(session)

const sessionConfig = {
  store: new FileStore(), // тип хранилища - FileStore, который создаёт нам папку с файлами
  key: "user_sid", // ключ - название куки
  secret: "anything here", // слово используемое для шифрования, может быть любым
  resave: false, // настройка пересохранения куки, при каждом запросе
  saveUninitialized: false, // настройка создания сессии, даже без авторизации
  cookie: {
    expires: 600000, // время "протухания" куки
    httpOnly: true // по умолчанию true
  }
}

export default sessionConfig
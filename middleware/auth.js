// промежуточная функция для очистки куки при истёкшей сессии на сервере
export function cookiesCleaner(req, res, next) {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid")
  } else {
    next()
  }
}

// промежуточная функция проверки авторизированного пользователя
export const sessionChecker = (req, res, next) => {
  if (req.session.user) {
    res.redirect("/dashboard")
  } else {
    next()
  }
}
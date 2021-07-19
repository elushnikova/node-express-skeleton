// промежуточная функция для очистки куки при истёкшей сессии на сервере
function cookiesCleaner(req, res, next) {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid")
  } else {
    next()
  }
}

// промежуточная функция проверки авторизированного пользователя
const sessionChecker = (req, res, next) => {
  if (req.session.user) {
    res.redirect("/dashboard")
  } else {
    next()
  }
}

export default { sessionChecker, cookiesCleaner }
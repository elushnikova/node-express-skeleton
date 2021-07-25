// промежуточная функция для очистки куки при истёкшей сессии на сервере
export function cookiesCleaner(req, res, next) {
  if (req.cookies.user_uid && !req.session.user) {
    console.log(req.cookies.user_uid)
    res.clearCookie("user_uid")
    res.redirect('/')
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
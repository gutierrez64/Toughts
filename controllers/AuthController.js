module.exports = class AuthController {
    static login(req, res) {
        res.render('auth/login')
    }
    
    static rigister(req, res) {
        res.render('auth/register')
    }
}
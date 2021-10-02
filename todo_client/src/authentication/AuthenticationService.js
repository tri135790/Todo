class AuthenticationService {
    registerSuccessfulLogin(username,password) {
        sessionStorage.setItem('authenticateUser',username);
    }

    logout() {
        sessionStorage.removeItem('authenticateUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticateUser')
        if (user===null) return false
        return true
    }
}

export default new AuthenticationService()
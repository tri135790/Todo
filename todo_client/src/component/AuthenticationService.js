class AuthenticationService {
    registerSuccessfulLogin(username,password) {
        console.log('registerSuccesfulLogin');
        sessionStorage.setItem('authenticateUser',username);
    }

    logout() {
        sessionStorage.removeItem('authenticateUser');
    }
}

export default new AuthenticationService()
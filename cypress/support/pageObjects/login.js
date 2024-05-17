export class loginPage {
    fieldUsername(){
        return cy.get('[data-cy="login__email-input"]')
    }

    fieldPassword(){
        return cy.get('[data-cy="login__password-input"]')
    }

    btnLogin(){
        return cy.get('[data-cy="login__login-button"]')
    }
}
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress-xpath" />

Cypress.Commands.add('logoutCMS', () => {
    cy.get('[data-cy="header__user-name"]').click()
    cy.get('[data-cy="header__user-logout-button"] > .flex').click()
    cy.get('[data-cy="header__logout-modal-logout-button"] > .flex').click()
    cy.get('[data-cy="login__form-title"]').should('be.visible')
})

const user = Cypress.env('username')
const pass = Cypress.env('password')

Cypress.Commands.add('loginCMS', () => {
    cy.get('[data-cy="login__email-input"]').type(user)
    cy.get('[data-cy="login__password-input"]').type(pass)
    cy.get('[data-cy="login__login-button"]').click()
    cy.wait(1000)
})
export class dashboardPage {
    headerTitle(){
        return cy.get('[data-cy="header__title"]')
    }

    menuLayanan(){
        return cy.get('[data-cy="sidebar__navigation"] > :nth-child(3) > .w-full')
    }

    btnTambahLayanan(){
        return cy.get(':nth-child(4) > .ml-auto')
    }
}
/// <reference types="Cypress"/>
describe('add employee', () => {
    it('new employee', () => {
  
  
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          cy.url().should('contain', 'auth/login')
  
      cy.get('input[name="username"]').type("Admin")
      cy.get('input[name="password"]').type("admin123")
      cy.get('.oxd-button').click()
          cy.url().should('contain', 'dashboard/index')
      cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
          cy.url().should('contain', '/addEmployee')
  
      cy.get('input[name="firstName"]').clear().type("Mirjana")
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Test')
      cy.get('input[name="lastName"]').clear().type("Antelj")
      cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("1998")
      
      cy.get('.oxd-button--secondary').click()
          cy.url().should('contain', '/viewPersonalDetails')
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input')
          .should('be.visible').and('have.value', 'Test')
    
  
        })

        it('add data', () => {
  
            cy.get(':nth-child(6) > .orangehrm-tabs-item').click()
          nesto pisati 
<<<<<<< HEAD
         orange izmena 
=======
        dodajem jos nesto
        dodajem jos teksta 
>>>>>>> 86e8161061adacfaee913a2d8cdd1885c9f776b5
            
              })
          }); 
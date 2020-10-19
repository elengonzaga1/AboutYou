describe ('login or register'), ()=>{
    it ('login'), ()=>{
        cy.visit('https://www.aboutyou.de/frauen/sale?loginFlow=login')
        cy.title().should('have','LoginFlow')
        cy.get('input[name="EmailField"]').type('textautomation@aboutyou.com')
        cy.get('input[name="PasswordField"]').type('Test123@')
        cy.get('input["submit"]').click()
        cy.title().should('have','LoginFlow')
        
    }
}
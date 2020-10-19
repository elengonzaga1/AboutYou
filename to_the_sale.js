describe ('open sale section'), ()=>{

    it ('app testing',  ()=>{
        cy.visit ('https://www.aboutyou.de/frauen/sale')
        cy.contains ('sale')
        cy.contains ('sale').click()
        cy.url().should ('include','/sale')
    })
    
};
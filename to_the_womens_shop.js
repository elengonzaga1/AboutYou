describe ('open womens section'), ()=>{

    it ('app testing',  ()=>{
        cy.visit ('https://www.aboutyou.de/?gender=female')
        cy.contains ('female')
        cy.contains ('female').click()
        cy.url().should ('include','/female')
    })
    
};
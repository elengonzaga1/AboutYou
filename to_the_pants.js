describe ('open pants section'), ()=>{

    it ('open pants',  ()=>{
        cy.visit ('https://www.aboutyou.de/frauen/sale/hosen')
        cy.contains ('hosen')
        cy.contains ('heson').click()
        cy.url().should ('include','/hosen')
    })
    
};
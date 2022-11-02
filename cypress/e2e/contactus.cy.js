describe('Contact Us Page', function () {
    beforeEach(function () {
        cy.visit("https://www.founderandlightning.com/contact")
    });
    it('Contact us page validation testing', function(){
        cy.get('[value="Send Message >"]').click();
        cy.get('.hs_firstname > .no-list > li > .hs-error-msg').should('have.text', 'Please complete this required field.');
        cy.get('.hs_email > .no-list > li > .hs-error-msg').should('have.text', 'Please complete this required field.');
        cy.get('.hs_message > .no-list > li > .hs-error-msg').should('have.text', 'Please complete this required field.');
        cy.get('.hs_mobilephone > .no-list > li > .hs-error-msg').should('have.text', 'Please complete this required field.');
    });
    it("Contact Us positive scenarios", function () {
        cy.get('[name="firstname"]').type('Ashish');
        cy.get('[name="lastname"]').type('Kumar');
        cy.get('[name="email"]').type('ashish.nirmohi@gmail.com');
        cy.get('[name="mobilephone"]').type('9876028861');
        cy.get('[name="how_did_you_hear_about_us_"]').select('Event');
        cy.get('[name="message"]').type('QA Testing Contact Us Page');
        cy.get('[value="Send Message >"]').click();
    });
});
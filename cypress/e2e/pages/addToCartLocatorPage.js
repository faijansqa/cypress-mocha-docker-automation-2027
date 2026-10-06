class AddToCartPage {

    gearMenu() {
        return cy.xpath('//span[text()="Gear"]/ancestor::li')
    }

    bags() {
        return cy.xpath('//span[text()="Bags"]/parent::a')
    }

    bagsHeading() {
        return cy.get('span[data-ui-id="page-title-wrapper"]')
    }

    bagsList() {
        return cy.get('strong[class*="product-item-name"] a')
    }

    bagPrice() {
        return cy.xpath('(//span[@class="price"])[1]')
    }

    addedProductName() {
        return cy.get('span[data-ui-id="page-title-wrapper"]')
    }

    addToCartCTA() {
        return cy.get('button[id="product-addtocart-button"]')
    }

    successMsg() {
        return cy.get('div[data-ui-id="message-success"]')
    }

    myCart() {
        return cy.get('div[class="minicart-wrapper"] > a')
    }

    proceedToCheckout(){
        return cy.get('button[title="Proceed to Checkout"]')
    }

    orderSummary(){
        return cy.get('span[class="title"]')
    }

}
export default AddToCartPage; 
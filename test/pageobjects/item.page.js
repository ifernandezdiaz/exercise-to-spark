import helpers from "./../helpers/helpers"

class ItemPage {

    // Page Elements
    get itemDescription () { return $('div[class*="pb-center-column"] h1[itemprop ="name"]') }
    get quantityField () { return $('#quantity_wanted') }
    get sizeDropDown () { return $('#uniform-group_1') }
    get sizeDropDownOptions () { return $$('#uniform-group_1 > select > option') }
    get colorList () { return $$('#color_to_pick_list > li > a') }
    get addToCartButton () { return $('#add_to_cart') }
    get proceedToCheckoutButton () { return $('a[title="Proceed to checkout"]') }

    // Page Methods
    setItemColor(colorName) {
        helpers.waitForElementDisplayed(this.colorList[0]);
        const colors = this.colorList;
        colors.forEach((element) => {
            if (element.getAttribute("name") === colorName)
                helpers.waitAndClick(element);
        })
    }

    /*
       Since selectByVisibleText and selectByAttribute methods didn't work for this element, I added this iteration
       in order to avoid hardcoding and/or a switch statement
    */
    setSize(size){
        helpers.waitAndClick(this.sizeDropDown);
        for (let i = 0; i < this.sizeDropDownOptions.length; i++) {
            if (this.sizeDropDownOptions[i].getText() === size.toUpperCase()) {
                this.sizeDropDownOptions[i].click()
            }
        }
    }

    setQuantity(quantity){
        helpers.waitForElementDisplayed(this.quantityField);
        this.quantityField.clearValue();
        this.quantityField.setValue(quantity);
    }

    addToCart() {
        helpers.waitAndClick(this.addToCartButton);
    }

    proceedToCheckout() {
        helpers.waitAndClick(this.proceedToCheckoutButton);
    }

    getItemDescription() {
        return helpers.waitAndGetText(this.itemDescription);
    }

}

export default new ItemPage()

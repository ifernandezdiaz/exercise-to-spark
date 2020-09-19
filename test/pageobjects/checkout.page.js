import helpers from "../helpers/helpers";

class CheckoutPage {

    // Page Elements
    get itemDescription () { return $('td[class="cart_description"] > p > a') }
    get totalAmount () { return $('td[class="price"] > span') }
    get sizeAndColor () { return $('td[class=cart_description] > small > a') }
    get selectedQuantity () { return $('input[class*=cart_quantity_input]') }

    // Page methods
    getItemDescription() {
        helpers.waitForElementDisplayed(this.itemDescription);
        return this.itemDescription.getText();
    }

    getTotalAmount() {
        return helpers.waitAndGetText(this.totalAmount);
    }

    getSelectedSize() {
        let size = helpers.waitAndGetText(this.sizeAndColor).split(',')[1];
        return size.split(':')[1].trim()
    }

    getSelectedColor() {
        let color = helpers.waitAndGetText(this.sizeAndColor).split(',')[0];
        return color.split(':')[1].trim();
    }

    getSelectedQuantity() {
        helpers.waitForElementDisplayed(this.selectedQuantity);
        return this.selectedQuantity.getValue();
    }
}

export default new CheckoutPage()
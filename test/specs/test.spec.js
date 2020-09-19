import MainPage from '../pageobjects/main.page'
import SearchPage from '../pageobjects/search.page'
import ItemPage from '../pageobjects/item.page'
import CheckoutPage from '../pageobjects/checkout.page'


describe('checkout cart', function () {
    it('should display the correct total amount for all the items', function (){
        MainPage.open();
        MainPage.searchItem("Dresses");
        SearchPage.openFirstResult();
        var itemDescription = ItemPage.getItemDescription();
        ItemPage.setSize("L");
        ItemPage.setQuantity(5);
        ItemPage.setItemColor("Blue");
        ItemPage.addToCart();
        ItemPage.proceedToCheckout();
        expect(CheckoutPage.getItemDescription()).toEqual(itemDescription);
        expect(CheckoutPage.getSelectedColor()).toEqual("Blue");
        expect(CheckoutPage.getSelectedSize()).toEqual("L");
        expect(CheckoutPage.getSelectedQuantity()).toEqual("5");
        expect(CheckoutPage.getTotalAmount()).toEqual("$146.90");
    })
})
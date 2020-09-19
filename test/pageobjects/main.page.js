import Page from "./page";
import local from "./../../wdio.local.conf"
import helpers from "./../helpers/helpers"

class MainPage extends Page {

    // Page Elements
    get searchField () { return $('#search_query_top') }
    get searchButton () { return $('button[class*="button-search"]') }
    get cartButton () { return $('a[title*="shopping cart"]') }

    // Page methods
    open() {
        super.open(local.config.baseUrl);
    }

    searchItem(text) {
        helpers.waitAndClick(this.searchField);
        this.searchField.clearValue();
        this.searchField.setValue(text);
        helpers.waitAndClick(this.searchButton);
    }

}

export default new MainPage()
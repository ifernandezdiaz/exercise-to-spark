import helpers from "./../helpers/helpers"

class SearchPage {

    // Page Elements
    get resultList() { return $$('h5[itemprop=\'name\'] a[class="product-name"]') }

    // Page methods
    openFirstResult() {
        helpers.waitAndClick(this.resultList[0]);
    }
}

export default new SearchPage()
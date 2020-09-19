
export class Helpers {

    waitForElementDisplayed(element) {
        browser.waitUntil( () => element.isDisplayed(),
            {
                        timeout: 5000,
                        timeoutMsg: 'Element expected was not found after 5 seconds',
                        interval: 500
                    })
    }

    waitAndClick(element){
        this.waitForElementDisplayed(element);
        element.click();
    }

    waitAndGetText(element) {
        this.waitForElementDisplayed(element);
        return element.getText();
    }

}

export default new Helpers()
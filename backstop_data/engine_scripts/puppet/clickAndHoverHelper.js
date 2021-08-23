module.exports = async (page, scenario) => {
  const hoverSelector = scenario.hoverSelectors || scenario.hoverSelector;
  const clickSelector = scenario.clickSelectors || scenario.clickSelector;
  const keyPressSelector = scenario.keyPressSelectors || scenario.keyPressSelector;
  const scrollToSelector = scenario.scrollToSelector;
  const postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]
  const beforeInteractionWait = scenario.beforeInteractionWait; // ms [int]

  if (beforeInteractionWait) {
    await new Promise((r) => setTimeout(r, beforeInteractionWait));
  }

  if (keyPressSelector) {
    for (const keyPressSelectorItem of [].concat(keyPressSelector)) {
      await page.waitFor(keyPressSelectorItem.selector);
      await page.type(keyPressSelectorItem.selector, keyPressSelectorItem.keyPress);
    }
  }

  if (hoverSelector) {
    for (const hoverSelectorIndex of [].concat(hoverSelector)) {
      await page.waitFor(hoverSelectorIndex);
      await page.evaluate((hoverSelectorIndex) => {
        const mouseoverEvent = new Event('mouseover', { bubbles: true });
        document.querySelectorAll(hoverSelectorIndex)[0].dispatchEvent(mouseoverEvent);
      }, hoverSelectorIndex);
      // await page.hover(hoverSelectorIndex);
    }
  }

  if (clickSelector) {
    for (const clickSelectorIndex of [].concat(clickSelector)) {
      await page.waitFor(clickSelectorIndex);
      await page.evaluate((clickSelectorIndex) => {
        document.querySelectorAll(clickSelectorIndex)[0].click();
      }, clickSelectorIndex);
      // await page.click(clickSelectorIndex);
    }
  }

  if (postInteractionWait) {
    await page.waitFor(postInteractionWait);
  }

  if (scrollToSelector) {
    await page.waitFor(scrollToSelector);
    await page.evaluate((scrollToSelector) => {
      document.querySelector(scrollToSelector).scrollIntoView();
    }, scrollToSelector);
  }
};

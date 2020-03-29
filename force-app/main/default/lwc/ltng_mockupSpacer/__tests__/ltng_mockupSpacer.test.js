/* eslint-disable @lwc/lwc/no-inner-html */

/** JEST Test for ltng_mockupSpacer/__tests__/ltng_mockupSpacer **/
import { createElement } from 'lwc';
import ltng_mockupSpacer from 'c/ltng_mockupSpacer';
// import { isArray } from 'util';

const defaultProperties = {};

class TestSettings {
  constructor() {
    /**
     * type {HtmlElement}
     */
    this.element = createElement('c-ltng_mockupSpacer', { is:ltng_mockupSpacer });
  }

  /**
   * Performs a custom setup step
   * @param {(TestSettings) => TestSettings}
   */
  customSetup(setupStep) {
    setupStep(this);
    return this;
  }

  /**
   * Applies the default properties on the component.
   * @returns {TestSettings}
   */
  applyDefaultProperties() {
    Object.assign(this.element, defaultProperties);
    return this;
  }

  /**
   * Applies a custom css
   * @param {String} newStyle - style to apply to the element.
   * @returns {TestSettings}
   */
  applyStyle(newStyle) {
    this.element.additionalCSS = newStyle;
    return this;
  }

  attachElement() {
    document.body.appendChild(this.element);
    return this;
  }
}

describe('c-ltng_mockupSpacer', () => {
  //-- boilerplate DOM reset
  afterEach(() => {
    while (document.body.firstChild){
      document.body.removeChild(document.body.firstChild);
    }
  });
  
  it('can be created', () => {
    const ts = new TestSettings()
      .applyDefaultProperties()
      .attachElement();
    
    expect(ts.element).not.toBe(null);
    
    // const div = ts.element.shadowRoot.querySelector('div');
    // expect(div.textContent).toBe('Hello, World!');
  });

  describe('custom css', () => {
    it('unless there is no customCSS provided', () => {
      const ts = new TestSettings()
        .applyDefaultProperties()
        .attachElement();

      const hrElement = ts.element.shadowRoot.querySelector('hr');
      expect(hrElement).not.toBeNull();

      expect(hrElement.style.length).toBe(0);
    });

    it('if there is a font-weight applied', () => {
      const ts = new TestSettings()
      .applyDefaultProperties()
      .applyStyle('font-weight:bold;')
      .attachElement();

      const hrElement = ts.element.shadowRoot.querySelector('hr');
      expect(hrElement).not.toBeNull();

      expect(hrElement.style.fontWeight).toBe('bold');
    });
  });
});
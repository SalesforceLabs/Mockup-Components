import { LightningElement, api } from 'lwc';

export default class Ltng_mockupSpacer extends LightningElement {

  /**
   * Padding size above the hr
   * @type {String}
   */
  // @api paddingSizeAbove = '0px;';

  /**
   * Padding size below the hr
   * @type {String}
   */
  // @api paddingSizeBelow = '0px;';

  /**
   * Additional css
   * @type {String}
   */
  @api additionalCSS = '';

  //-- standard functions

  // connectedCallback() {
  // }

  //-- getters / setters 
  /**
   * The generated CSS of the horizontal rule.
   * @type {String}
   */
  @api get generatedCSS() {
    let results = '';

    // if (this.paddingSizeAbove) {
    //   results += `padding-top:${this.paddingSizeAbove};`;
    // }
    // if (this.paddingSizeBelow) {
    //   results += `padding-bottom:${this.paddingSizeBelow};`;
    // }

    if (this.additionalCSS) {
      results += `${this.additionalCSS};`;
    }

    return results;
  }
}
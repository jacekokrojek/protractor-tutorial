import { element, by } from 'protractor';
import { BrowserUtils } from '../../utils/browserUtils';

export  enum SocialLink {
  GooglPlus = 0
}

export class Footer {

  async getText(){
		return await element(by.css('footer')).getText();
  };
  
  async clickSocialLine(link: SocialLink){
    await BrowserUtils.click(element.all(by.css('.social a')).get(link));
  }
  
};

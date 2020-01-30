import { Home} from './pages/home'
import { Footer, SocialLink } from './pages/components/footer'

describe('Protractor Workshop app', function() {

	let home: Home = new Home();
	let footer: Footer = new Footer();

	beforeEach(async function () {
		await home.get();	
	});

	it('should redirect to admin dashboard when user provides correct credentials', async function(){
		await footer.clickSocialLine(SocialLink.GooglPlus);
		expect(await footer.getText()).toContain("Copyright © 2013 Shapebootstrap");
	});

});

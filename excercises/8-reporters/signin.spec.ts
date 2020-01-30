import {SignIn, Admin} from './pages'
import { UserRepository } from './utils/users/user-repository';
describe('Protractor Workshop app', function() {

	let signIn: SignIn = new SignIn();
	let admin: Admin = new Admin();

	beforeEach(async function () {
		await signIn.get();	
	});

	it('should redirect to admin dashboard when user provides correct credentials', async function(){
		await signIn.as(UserRepository.admin())
		expect(await admin.isLoaded()).toBe(true)
	});

});

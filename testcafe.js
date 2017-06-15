import { Selector } from 'testcafe';

let url = 'https://faris23.erpnext.com';

fixture(`Login Test`)
	.page(url + '/login');

test('Login', async t => {
	await t
		.typeText("#login_email", "netchamp.faris@gmail.com")
		.typeText("#login_password", "qwe")
		.click(".btn-login")
		.expect(Selector("#page-desktop").exists).ok()
});

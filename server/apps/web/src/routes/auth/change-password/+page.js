import { api } from '@api';
import { redirect } from '@sveltejs/kit';
export const prerender = false;
export const load = async () => {
    try {
        const { data: userInfo } = await api.userApi.getMyUserInfo();
        if (userInfo.shouldChangePassword) {
            return {
                user: userInfo
            };
        }
        else {
            throw redirect(302, '/photos');
        }
    }
    catch (e) {
        throw redirect(302, '/auth/login');
    }
};
//# sourceMappingURL=+page.js.map
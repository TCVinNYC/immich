import { redirect } from '@sveltejs/kit';
import { serverApi } from '@api';
export const load = async () => {
    const { data } = await serverApi.userApi.getUserCount();
    if (data.userCount != 0) {
        // Admin has been registered, redirect to login
        throw redirect(302, '/auth/login');
    }
    return;
};
//# sourceMappingURL=+page.server.js.map
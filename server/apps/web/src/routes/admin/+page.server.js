import { redirect } from '@sveltejs/kit';
import { serverApi } from '@api';
export const load = async ({ parent }) => {
    const { user } = await parent();
    if (!user) {
        throw redirect(302, '/auth/login');
    }
    else if (!user.isAdmin) {
        throw redirect(302, '/photos');
    }
    const { data: allUsers } = await serverApi.userApi.getAllUsers(false);
    return {
        user: user,
        allUsers: allUsers
    };
};
//# sourceMappingURL=+page.server.js.map
import { redirect } from '@sveltejs/kit';
import { serverApi } from '@api';
export const load = async ({ parent }) => {
    try {
        const { user } = await parent();
        if (!user) {
            throw Error('User is not logged in');
        }
        const { data: albums } = await serverApi.albumApi.getAllAlbums();
        return {
            user: user,
            albums: albums
        };
    }
    catch (e) {
        throw redirect(302, '/auth/login');
    }
};
//# sourceMappingURL=+page.server.js.map
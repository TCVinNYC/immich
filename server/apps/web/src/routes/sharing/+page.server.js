import { redirect } from '@sveltejs/kit';
export const prerender = false;
import { serverApi } from '@api';
export const load = async ({ parent }) => {
    try {
        const { user } = await parent();
        if (!user) {
            throw redirect(302, '/auth/login');
        }
        const { data: sharedAlbums } = await serverApi.albumApi.getAllAlbums(true);
        return {
            user: user,
            sharedAlbums: sharedAlbums
        };
    }
    catch (e) {
        throw redirect(302, '/auth/login');
    }
};
//# sourceMappingURL=+page.server.js.map
import { redirect } from '@sveltejs/kit';
import { serverApi } from '@api';
export const load = async ({ parent, params }) => {
    const { user } = await parent();
    if (!user) {
        throw redirect(302, '/auth/login');
    }
    const albumId = params['albumId'];
    try {
        const { data: album } = await serverApi.albumApi.getAlbumInfo(albumId);
        return {
            album
        };
    }
    catch (e) {
        throw redirect(302, '/albums');
    }
};
//# sourceMappingURL=+page.server.js.map
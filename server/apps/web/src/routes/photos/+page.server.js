import { serverApi } from './../../api/api';
import { redirect, error } from '@sveltejs/kit';
export const load = async ({ parent }) => {
    try {
        const { user } = await parent();
        if (!user) {
            throw error(400, 'Not logged in');
        }
        const { data: assets } = await serverApi.assetApi.getAllAssets();
        return {
            user,
            assets
        };
    }
    catch (e) {
        throw redirect(302, '/auth/login');
    }
};
//# sourceMappingURL=+page.server.js.map
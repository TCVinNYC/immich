import { json } from '@sveltejs/kit';
import { api, serverApi } from '@api';
export const POST = async () => {
    api.removeAccessToken();
    serverApi.removeAccessToken();
    const headers = new Headers();
    headers.append('set-cookie', 'immich_is_authenticated=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;');
    headers.append('set-cookie', 'immich_access_token=delete; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');
    return json({
        ok: true
    }, {
        headers
    });
};
//# sourceMappingURL=+server.js.map
import { redirect } from '@sveltejs/kit';
export const prerender = false;
export const load = async ({ params, parent }) => {
    const { user } = await parent();
    if (!user) {
        throw redirect(302, '/auth/login');
    }
    const albumId = params['albumId'];
    if (albumId) {
        throw redirect(302, `/albums/${albumId}`);
    }
    else {
        throw redirect(302, `/photos`);
    }
};
//# sourceMappingURL=+page.js.map
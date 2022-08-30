import { redirect } from '@sveltejs/kit';
export const prerender = false;
export const load = async ({ parent }) => {
    const { user } = await parent();
    if (!user) {
        throw redirect(302, '/auth/login');
    }
    else {
        throw redirect(302, '/photos');
    }
};
//# sourceMappingURL=+page.server.js.map
import { writable, derived } from 'svelte/store';
export const downloadAssets = writable({});
export const isDownloading = derived(downloadAssets, ($downloadAssets) => {
    if (Object.keys($downloadAssets).length == 0) {
        return false;
    }
    return true;
});
//# sourceMappingURL=download.js.map
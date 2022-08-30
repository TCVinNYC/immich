import { writable } from 'svelte/store';
function createAlbumUploadStore() {
    const albumUploadAsset = writable([]);
    const albumUploadAssetCount = writable(9999);
    return {
        asset: albumUploadAsset,
        count: albumUploadAssetCount
    };
}
export const albumUploadAssetStore = createAlbumUploadStore();
//# sourceMappingURL=album-upload-asset.js.map
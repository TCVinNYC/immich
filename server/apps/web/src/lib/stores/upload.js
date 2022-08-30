import { writable, derived } from 'svelte/store';
function createUploadStore() {
    const uploadAssets = writable([]);
    const { subscribe } = uploadAssets;
    const isUploading = derived(uploadAssets, ($uploadAssets) => {
        return $uploadAssets.length > 0 ? true : false;
    });
    const addNewUploadAsset = (newAsset) => {
        uploadAssets.update((currentSet) => [...currentSet, newAsset]);
    };
    const updateProgress = (id, progress) => {
        uploadAssets.update((uploadingAssets) => {
            return uploadingAssets.map((asset) => {
                if (asset.id == id) {
                    return {
                        ...asset,
                        progress: progress
                    };
                }
                return asset;
            });
        });
    };
    const removeUploadAsset = (id) => {
        uploadAssets.update((uploadingAsset) => uploadingAsset.filter((a) => a.id != id));
    };
    return {
        subscribe,
        isUploading,
        addNewUploadAsset,
        updateProgress,
        removeUploadAsset
    };
}
export const uploadAssetsStore = createUploadStore();
//# sourceMappingURL=upload.js.map
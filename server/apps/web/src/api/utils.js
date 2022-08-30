let _basePath = '/api';
export function getFileUrl(aid, did, isThumb, isWeb) {
    const urlObj = new URL(`${window.location.origin}${_basePath}/asset/file`);
    urlObj.searchParams.append('aid', aid);
    urlObj.searchParams.append('did', did);
    if (isThumb !== undefined && isThumb !== null)
        urlObj.searchParams.append('isThumb', `${isThumb}`);
    if (isWeb !== undefined && isWeb !== null)
        urlObj.searchParams.append('isWeb', `${isWeb}`);
    return urlObj.href;
}
//# sourceMappingURL=utils.js.map
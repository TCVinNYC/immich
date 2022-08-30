import { AlbumApi, AssetApi, AuthenticationApi, Configuration, DeviceInfoApi, ServerInfoApi, UserApi } from './open-api';
class ImmichApi {
    constructor() {
        this.config = new Configuration({ basePath: '/api' });
        this.userApi = new UserApi(this.config);
        this.albumApi = new AlbumApi(this.config);
        this.assetApi = new AssetApi(this.config);
        this.authenticationApi = new AuthenticationApi(this.config);
        this.deviceInfoApi = new DeviceInfoApi(this.config);
        this.serverInfoApi = new ServerInfoApi(this.config);
    }
    setAccessToken(accessToken) {
        this.config.accessToken = accessToken;
    }
    removeAccessToken() {
        this.config.accessToken = undefined;
    }
    setBaseUrl(baseUrl) {
        this.config.basePath = baseUrl;
    }
}
export const api = new ImmichApi();
export const serverApi = new ImmichApi();
serverApi.setBaseUrl('http://immich-server:3001');
//# sourceMappingURL=api.js.map
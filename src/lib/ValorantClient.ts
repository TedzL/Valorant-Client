import { APIResponse, ValorantAPI } from 'uvaw';
import { AccountResponse } from './models/Account';
import { ResponseInfo } from './models/Response';

export class ValorantClient {
  private api: ValorantAPI;

  constructor(api: ValorantAPI) {
    this.api = api;
  }

  async getAccount(info: { name: string; tag: string }) {
    const RawAccountResponse = await this.api.getAccount(info);

    return {
      account: RawAccountResponse.data,
      request: RawAccountResponse as ResponseInfo,
    } as AccountResponse;
  }
}

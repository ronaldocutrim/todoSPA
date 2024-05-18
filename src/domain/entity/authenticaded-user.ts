import { GetAuthenticadedUserModel } from '../model/get-user-token-model';

export class AuthenticadedUser {
  tokenJwt: string;
  userName: string;
  userEmail: string;

  constructor(getAuthenticadedUserTokenModel: GetAuthenticadedUserModel) {
    this.tokenJwt = getAuthenticadedUserTokenModel.token;
    this.userName = getAuthenticadedUserTokenModel.name;
    this.userEmail = getAuthenticadedUserTokenModel.email;
  }
}

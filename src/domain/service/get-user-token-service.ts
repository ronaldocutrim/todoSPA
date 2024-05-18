import { AuthenticadedUser } from '../entity/authenticaded-user';
import { GetUserTokenUseCase } from '../usecases/get-user-token';
import { GetAuthenticadedUserModel } from '../model/get-user-token-model';
import { AuthenticationDto } from '../dto/authentication-dto';
import { HttpClient } from '../infra/adapters/http-client';
import { Storage } from '../infra/adapters/storage';

export class GetUserTokenService implements GetUserTokenUseCase {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly storage: Storage,
  ) {}

  async perform(
    authenticationDto: AuthenticationDto,
  ): Promise<AuthenticadedUser> {
    const response = await this.httpClient.post<GetAuthenticadedUserModel>(
      '/user',
      authenticationDto,
    );
    this.storage.set('token', response.token);
    return new AuthenticadedUser(response);
  }
}

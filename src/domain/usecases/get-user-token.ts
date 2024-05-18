import { AuthenticationDto } from '../dto/authentication-dto';
import { AuthenticadedUser } from '../entity/authenticaded-user';

export interface GetUserTokenUseCase {
  perform(userDto: AuthenticationDto): Promise<AuthenticadedUser>;
}

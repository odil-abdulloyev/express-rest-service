import IUser from '../../types/iuser';
import * as loginRepo from './login.repository'
import User from '../../entity/user';

const getUser = async ({login, password}: IUser): Promise<User | undefined> => loginRepo.getUser({login, password} as IUser);

export { getUser };

import * as loginRepo from './login.repository'
import User from '../../entity/user';

const getUser = async (login: string): Promise<User | undefined> => loginRepo.getUser(login);

export { getUser };

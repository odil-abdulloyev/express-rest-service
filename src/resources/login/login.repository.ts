import User from '../../entity/user';
import IUser from '../../types/iuser';

const getUser = async ({login, password}: IUser): Promise<User | undefined> => User.findOne({login, password});

export { getUser };
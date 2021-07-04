import User from '../../entity/user';

const getUser = async (login: string): Promise<User | undefined> => User.findOne({login});

export { getUser };
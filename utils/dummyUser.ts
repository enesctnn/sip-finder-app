type User = {
  username: string;
  email: string;
  password: string;
  token: string;
};

export const dummyUsers: User[] = [
  {
    username: 'info@cocktails',
    email: 'info@cocktails.com',
    password: '123456aA@',
    token: 'DUMMY_USER_TOKEN_1',
  },
];

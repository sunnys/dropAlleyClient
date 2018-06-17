import config from '../../api/config.json';

const UserState = {
  id: 'user-me',
  name: 'Samrith Shankar',
  status: 2,
  statusDescription: 'Veni. Vidi. Vici.',
  gender: 'Male',
  username: 'samrith',
  email: 'samrith@troup.io',
  lastSeen: Date.now(),
  avatar: 'https://avatars1.githubusercontent.com/u/9032162?s=460&v=4',
  isUserAuthenticated: window.localStorage.getItem(config.bearerTokenKey)
    ? true
    : false
};

export default UserState;

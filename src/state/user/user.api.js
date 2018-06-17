import Api from '../../api';

const UserApi = {
  api: new Api({ app: 'sessions', version: 'v1' }),

  login(data, options = {}) {
    console.log('user.api.js:7 => Here');
    return this.api.post('', data, options);
  },

  logout(options = {}) {
    return this.api.delete('', options);
  }
};

export default UserApi;

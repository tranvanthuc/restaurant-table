import axios from 'libs/axios';

export default {
  getList() {
    const params = {
      api_key: '80654656c6586a0c705642639595a994',
    };
    return axios.get('popular', { params });
  },
};

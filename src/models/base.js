import { requestTime } from '@/utils/time';

export default {
  namespace: 'users',
  state: {
    weekArr: [1,2,3,4,5,6,7],
    time: undefined
  },
  reducers: {
    save(state, { payload: time }) {
      return { ...state, time };
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const result = yield call(requestTime, payload);
      yield put({ type: 'save', payload: result });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log(pathname);
        console.log(query);
      });
    },
  },
};
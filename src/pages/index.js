import React,{ useEffect, useState, useRef } from 'react';
import { connect } from 'dva';
import { map, get } from 'lodash';

import styles from './index.css';

const Home = ({ users, dispatch }) => {

  const weekArr = get(users, 'weekArr', []);
  const time = get(users, 'time');
  const [text, setText] = useState(time);
  const BannerSwipeRef = useRef(null);

  useEffect(() => {
    setText(time);
    BannerSwipeRef.current && BannerSwipeRef.current.update();
  }, [time]);

  const $weekList = map(weekArr, item => {
    return <div>{`星期${item}`}</div>
  });

  return (
    <div className={styles.normal}>
      {$weekList}
      <button onClick={requestTime}>request</button>
      <p>click `request` await 3s will echo: <br/><br/> {text}</p>
    </div>
  );

  function requestTime(){
    dispatch({
      type: 'users/fetch',
      payload: 'Now time:'
    })
  }
}


export default connect(state => ({
  users: state.users
}))(Home)
import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter';

const Home = props => (
  <div>
    <h1>Welcome to My Music library</h1>
    
  </div>
);

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/geners')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Tracks = props => (
    <div>
      <h1>Tracks</h1>
    </div>
);

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
bindActionCreators(
    {
        changePage: () => push('/about-us')
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
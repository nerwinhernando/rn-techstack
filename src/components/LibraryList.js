import React from 'react';
import { connect } from 'react-redux';

class LibraryList extends React.Component {
    render() {
        return;
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);

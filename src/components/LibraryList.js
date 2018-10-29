import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends React.Component {
    renderItem({item}) {
        return <ListItem library={item} />;
    }

    render() {
        return(
            <FlatList 
                data={this.props.libraries}
                renderItem={this.renderItem}
                //renderItem={({item}) => <ListItem library={item} />}
                keyExtractor={library => library.id}
            />
        );
    }
}

{/* <FlatList
  data={[{title: 'Title Text', key: 'item1'}]}
  renderItem={({item}) => <ListItem library={item} />}
/> */}


const mapStateToProps = state => {
    return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);

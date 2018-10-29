import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {
    renderDescription() {
        const { library, expanded } = this.props;

        if(expanded) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        //console.log(this.props.library);
        console.log(this.props);
        const { id, title } = this.props.library;
        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id
    
    return { expanded };
};

// no mapstatetoprops so it is null
export default connect(mapStateToProps, actions)(ListItem);

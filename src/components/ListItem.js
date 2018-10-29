import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends React.Component {
    render() {
        const { titleStyle } = styles;
        //console.log(this.props.library)
        return(
            <CardSection>
                <Text style={titleStyle}>
                    {this.props.library.title}
                </Text>
            </CardSection>
        );
    }
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;

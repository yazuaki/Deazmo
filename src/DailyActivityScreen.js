import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { deleteActivity } from './actions/activity';

class DailyActivityScreen extends Component {

  render() {
    console.log(this.props.activity)
    return (
      <FlatList style={styles.listContainer}
        data={this.props.activity}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={
          (data)  =>
            <ListItem
              title={data.item.name}
              // title={data.item.info}
              // title={data.item.req}
              // title={data.item.size}
              bottomDivider
            />
        }
      />
    );
  }
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#dce2ff',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
});

const mapStateToProps = (state) => {
  console.log(state);
  return {
    activity: state.activities.activityForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(deleteActivity(key))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DailyActivityScreen);


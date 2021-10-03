import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, ScrollView, View} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {fetchContactData, fetchDataSuccess} from '../redux/action/contactAction';

const contactList = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.contactListReducer.user);
  console.log('contactList Screen =', user);

  useEffect(() => {
    dispatch(fetchContactData());


  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{height: 10}} />
        <Text style={styles.counterTitle}>Hello Hi....</Text>

        <View style={styles.counterContainer}>
          <View style={{height: 50}} />

          <View style={{height: 10}} />

          <Text style={styles.counterText}>
            Data : {props?.payload?.data?.countriesRoute.Name}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  //}
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  counterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#000000',
  },
  counterTextHeading: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#000000',
    fontWeight: 'bold',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

// const mapStateToProps = ({state, payload}) => {
//   return {
//     payload: payload,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     reduxFetchData: data => dispatch(getDetails(data)),
//   };
// };

export default contactList;

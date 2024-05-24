import React, { useState } from "react";
import { View, Text, TextInput, Alert, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "@react-navigation/native";
// import { Steps } from 'antd';

const Payments = ({navigation,route}) => {
  
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: "20px",
          textAlign: "left",
          fontWeight: 500,
        }}
      >
        Payments
      </Text>
      <Stepper steps={ [{title: 'Cart'}, {title: 'Address'}, {title: 'Payments'}, {title: 'Place Order'}] } activeStep={ 2 } />
       <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => {
            navigation.navigate("PlaceOrder");
          }}
        > <Text style={styles.loginButtonText}>Address Confirmation</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  proceedButton: {
    backgroundColor: "red",

    paddingVertical: 10,

    borderRadius: 5,

    alignItems: "center",
  },
  input: {
    height: 40,

    borderColor: "grey",

    borderWidth: 1,

    marginBottom: 16,

    paddingHorizontal: 8,

    borderRadius: 8,

    placeholderTextColor: "grey",

    labelTextcolor: "grey",
  },

  buttons: {
    backgroundColor: "#C93B1F",
    padding: 10,
    borderRadius: 10,
    labelColor: "white",
    fontFamily: "bold",
    textAlign: "center",
  },
  link: {
    color: "red",
    paddingHorizontal: "2px",
  },
});
export default Payments;
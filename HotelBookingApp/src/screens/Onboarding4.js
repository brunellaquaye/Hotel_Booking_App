import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Onboarding4 = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        marginHorizontal: wp("9px"),
        gap: wp("10px"),
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
     
     <View
  style={{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp( "80px"),
    // marginBottom: "30px",
  }}
>
  <View
    style={{
      backgroundColor: "#3D5BF6",
      borderTopLeftRadius: 15, 
      borderTopRightRadius: 15, 
      width: wp("10px"), 
      height: wp("10px"), 
      overflow: "hidden",
    }}
  ></View>
</View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            fontSize: wp("6px"),
            fontWeight: wp("600px"),
            color: "#151B33",
            height: wp("10px"),
            fontFamily: "Arial",
            marginBottom: wp("5px"),
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: wp("40px"),
          }}
        >
          Welcome to Hotelyn{" "}
        </Text>

        <Text
          style={{
            fontSize: wp("3.5px"),
            fontWeight: wp("400px"),
            color: "#A7AEC1",
            height: wp("20px"),
            fontFamily: "Arial",
            alignText: "center",
            justifyContent: "center",
          }}
        >
          If you are new here please create your account first before book the
          hotel.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#3D5BF6",
          borderRadius: wp("10px"),
          width: wp("80px"),
          height: hp("7px"),
          justifyContent: "center",
          alignItems: "center",
          marginTop: hp("1px"),
          marginBottom: hp("2px"),
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: wp("10px"),
          width: wp("80px"),
          height: hp("7px"),
          justifyContent: "center",
          alignItems: "center",
          // marginTop: hp("1px"),
          marginBottom: hp("10px"),
        }}
      >
        <Text
          style={{
            color: "#3D5BF6",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding4;

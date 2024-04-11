import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const OnboardingA = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginHorizontal: wp("9px"),
        gap: wp("2px"),
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Image
        style={{
          width: wp("100%"),
          height: wp("120%"),
          alignSelf: "center",
        }}
        source={require("../../assets/hotels.png")}
      />

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
            marginTop: wp("6px"),
          }}
        >
          Find Hundreds of Hotels{" "}
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
          Discover hundreds of hotels that spread across the world for you.
        </Text>
        
      </View>
{/* 
      <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
      
      }}
      >
        <View style={{
          backgroundColor:"#3D5BF6",
          borderRadius: wp("10px"),
          width: wp("2px"),
          height: hp("1px"),
          justifyContent: "space-between",
          }}></View>
        <View style={{
          backgroundColor:"#3D5BF6",
          borderRadius: wp("10px"),
          width: wp("2px"),
          height: hp("1px"),
          justifyContent: "center",
          alignItems: "center",
          }}></View>
        <View style={{
          backgroundColor:"#3D5BF6",
          borderRadius: wp("10px"),
          width: wp("2px"),
          height: hp("1px"),
          justifyContent: "center",
          alignItems: "center",
          }}></View>
      </View> */}

      <TouchableOpacity
        onPress={()=> navigation.navigate("Onboarding3")}
      style={{
        backgroundColor: "#3D5BF6",
        borderRadius: wp("10px"),
        width: wp("80px"),
        height: hp("7px"),
        justifyContent: "center",
        alignItems: "center",
        marginTop: hp("1px"),
        marginBottom: hp("2px"),
      }}>
        <Text
        style={{
          color: "#FFFFFF",
        }}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Onboarding4")}

      style={{
        borderRadius: wp("10px"),
        width: wp("80px"),
        height: hp("7px"),
        justifyContent: "center",
        alignItems: "center",
        // marginTop: hp("1px"),
        // marginBottom: hp("10px"),
      }}>
        <Text
        style={{
          color: "#3D5BF6",
        }}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingA;

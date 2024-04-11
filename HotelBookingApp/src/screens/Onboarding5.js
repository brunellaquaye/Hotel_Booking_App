import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Onboarding5 = () => {
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
        source={require("../../assets/discover.jpg")}
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
          Make a Destination Plan{" "}
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
          Choose the location and we have many hotel recommendations wherever you are.
        </Text>
        
      </View>

      

      <TouchableOpacity
      onPress={()=>navigation.navigate("Onboarding4")}
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
      onPress={()=>navigation.navigate("Onboarding4")}

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

export default Onboarding5;

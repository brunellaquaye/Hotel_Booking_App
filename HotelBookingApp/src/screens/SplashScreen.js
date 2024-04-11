import React, {useEffect} from "react";
import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { useSafeAreaInsets } from "react-native-safe-area-context";
  import { useNavigation } from "@react-navigation/native";

  const HomeScreen = () => {
    const navigation = useNavigation();

    
    useEffect(() => {
      navigation.navigate('OnboardingA');
    }, []);
  
    return (
        
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    
        

      <Text
        style={{
          fontSize: wp("10px"),
          fontWeight: wp("700"),
          color: "#3D5BF6",
          height: wp("23.5px"),
          fontFamily: "Arial",
        }}
      >
        Hotelyn
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


export default HomeScreen;
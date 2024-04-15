import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Settings  = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();


  return (
    <View  
    style={{
        marginHorizontal: wp("9px"),
        gap: wp("10px"),
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>

    <View
    style={{
      flexDirection: "row",
       justifyContent: "space-aroung",
       alignContent: "center",
       padding: wp("3px"),
      // marginHorizontal: wp("23px"),

    }}>
    <Text
    style={{
      justifyContent: "left",
      marginRight: wp("23px"),
      marginTop: wp("10px"),
    }}>
     <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
     </Text>
      <Text 
      style={{fontSize: wp("5px"),
         fontWeight: "4 00",
         color: "#151B33",
      // height: wp("10px"),
         marginTop: wp("10px"),
         justifyContent: "center",
      //   alignContent: "center",
         }}
      >
        Settings
        </Text>
    </View>
    <Text
     style={{fontSize: wp("4px"),
         fontWeight: "600",
         color: "#151B33",
    
         }}>Account Settings</Text>


<View
        style={{
            flexDirection: "column",
            justifyContent: "space-between",
            // alignItems: "center",
            marginTop: wp("0px"),
            marginBottom: wp("0px"),
        }}>
            <TouchableOpacity>
                <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                   backgroundColor: "white",
                   alignContent: "center",
                  //  height: wp("10"),
                   borderRadius: wp("2px"),
                   marginBottom: wp("3px"),
                   padding: wp("4px"),
                }}>
                
                <Text style={{
                    justifyContent: "space-between",
                }}>
                    <AntDesign name="user" size={24} color="black" />       My Profile                </Text>
 <MaterialIcons name="arrow-forward-ios" size={23} color="#A7AEC1" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                   backgroundColor: "white",
                   alignContent: "center",
                  //  height: wp("15"),
                   borderRadius: wp("2px"),
                   marginBottom: wp("3px"),
                   padding: wp("4px"),

                }}>
                
                <Text style={{
                    justifyContent: "space-between",
                }}>
                    <Feather name="bell" size={24} color="black" />      Notifications                </Text>
 <MaterialIcons name="arrow-forward-ios" size={23} color="#A7AEC1" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                   backgroundColor: "white",
                   alignContent: "center",
                  //  height: wp("15"),
                   borderRadius: wp("3px"),
                   marginBottom: wp("3px"),
                   padding: wp("4px"),

                }}>
                
                <Text style={{
                    justifyContent: "space-between",
                }}>
                    <MaterialIcons 
                    style={{
                        alignContent: "center",
                        justifyContent: "space-between",
                        marginTop: "10px",

                    }}
                    name="payment" size={24} color="black" />       Payments and Payouts                </Text>
 <MaterialIcons name="arrow-forward-ios" size={23} color="#A7AEC1" />
                </View>
            </TouchableOpacity>
            <Text
     style={{fontSize: wp("4px"),
         fontWeight: "600",
         color: "#151B33",
         marginBottom: "10px",
    
         }}>Prefences</Text>

            <TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                   backgroundColor: "white",
                   alignContent: "center",
                  //  height: wp("15"),
                   borderRadius: wp("2px"),
                   marginBottom: wp("3px"),
                   padding: wp("4px"),
                   marginTop: wp("5px"),


                }}>
                
                <Text style={{
                    justifyContent: "space-between",
                    color: "Black",
                }}>
                    <Feather name="globe" size={24} color="black" />      Languages               </Text>
 <MaterialIcons name="arrow-forward-ios" size={23} color="#A7AEC1" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                   backgroundColor: "white",
                   alignContent: "center",
                  //  height: wp("15"),
                   borderRadius: wp("2px"),
                   marginBottom: wp("3px"),
                   padding: wp("4px"),

                }}>
                
                <Text style={{
                    justifyContent: "space-between",
                    color: "black",
                }}>
                    <FontAwesome name="moon-o" size={24} color="black" />      Dark Mode 
                    <Text>                                         <FontAwesome6 name="toggle-off" size={24} color="#A7AEC1" />
</Text>              
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                   backgroundColor: "white",
                   alignContent: "center",
                  //  height: wp("15"),
                   borderRadius: wp("2px"),
                   marginBottom: wp("3px"),
                   padding: wp("4px"),

                }}>
                
                <Text style={{
                    justifyContent: "space-between",
                    color: "black",
                }}>
                    <Feather name="lock" size={24} color="black" />      Privacy Settings               </Text>
 <MaterialIcons name="arrow-forward-ios" size={23} color="#A7AEC1" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                   backgroundColor: "white",
                   alignContent: "center",
                  //  height: wp("15"),
                   borderRadius: wp("2px"),
                   marginBottom: wp("3px"),
                   padding: wp("4px"),

                }}>
                
                <Text style={{
                    justifyContent: "space-between",
                    color: "red",
                }}>
                    <MaterialCommunityIcons 
                    style={{
                        alignContent: "center",
                        justifyContent: "space-between",
                        marginTop: "10px",
                    }}
                    name="logout" size={24} color="red" />       Logout               </Text>
                </View>
            </TouchableOpacity>
            
            {/* Set up tab navigation at the bottom */}

        </View>

    </View>
    
  )
}

export default Settings 
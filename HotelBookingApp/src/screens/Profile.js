import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = () => {
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
          justifyContent: "space-between",
          alignItems: "center",

          // marginBottom: "30px",
        }}
      >
        <Text
          style={{
            fontSize: wp("6px"),
            fontWeight: wp("600px"),
            color: "#151B33",
            height: wp("10px"),
            fontFamily: "Arial",
            // marginBottom: wp("5px"),
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: wp("40px"),
          }}
        >
          Profile
        </Text>
        <AntDesign name="setting" size={24} color="black" />
      </View>

      <View
      style={{
        // alignContent: "center",
        // justifyContent: "center",
        // alignContent: "center",
        textAlign: "center",
      }}>
        <Image
          style={{
            marginHorizontal: wp("28px"),
            justifyContent: "center",
            alignItems: "center",
          }}
          source={require("../../assets/Proofile.png")}
        />
        <View style={{ flexDirection: 'column' }}
        >
        <Text
        style={{
            fontSize: wp("5px"),
            fontWeight: wp("600px"),
            color: "#151B33",
            alignText: "center",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: wp("23px"),
            height: wp("10px"),
        }}
        >Marrine Gustav 
        </Text>
        <Text
        style={{
            fontSize: wp("3px"),
            fontWeight: wp("600px"),
            color: "#A7AEC1",      
            marginHorizontal: wp("23px"),
            height: wp("8px"),

        }}
        >Purwokerto, Indonesia</Text>

        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: wp("2px"),
            marginBottom: 0,
            backgroundColor: "white",
            borderRadius: wp("2px"),
            height: wp("20px"),

        }}>


{/* fix the height of this view */}
       <View style={{
        flexDirection: "column",
        alignItems: "center",

        }}>
       <Text 
        style={{
        color: "#3D5BF6",
        fontWeight: wp("700px"),
        fontSize: wp("5px"),

       }}>26</Text>
       <Text  style={{
            fontSize: wp("3px"),
            fontWeight: wp("600px"),
            color: "#A7AEC1",
            fontFamily: "Arial",
            alignText: "center",
        }}>Transaction</Text></View> 

       <View style={{
        flexDirection: "column",
        alignItems: "center",
}}>
       <Text 
       style={{
        color: "#3D5BF6",
        fontWeight: wp("700px"),
        fontSize: wp("5px"),
        alignText: "center",

       }}>12</Text>
       <Text  style={{
            fontSize: wp("3px"),
            fontWeight: wp("600px"),
            color: "#A7AEC1",
            fontFamily: "Arial",
            alignText: "center",
            marginRight: wp("2px"),
        }}>Review</Text>
       </View> 

       <View style={{flexDirection: "column",alignItems: "center",
}}>
       <Text 
        style={{
        color: "#3D5BF6",
        fontWeight: wp("700px"),
        fontSize: wp("5px"),

       }}>4</Text>
       <Text  style={{
            fontSize: wp("3px"),
            fontWeight: wp("600px"),
            color: "#A7AEC1",
            fontFamily: "Arial",
            alignText: "center",

        }}>Bookings</Text>
       </View> 
       
        
        </View>

        <Text style={{fontSize: wp("4px"),
            fontWeight: wp("600px"),
            color: "#151B33",
            height: wp("15px"),}}
            >
            Option
            </Text>
        

        </View>

{/* Put some margin in between the option cards and fix the height and orientation */}
        <View
        style={{
            flexDirection: "column",
            justifyContent: "space-between",
            // alignItems: "center",
            marginTop: wp("2px"),
            marginBottom: 0,
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
                }}>
                
                <Text style={{
                    justifyContent: "space-between",
                }}>
                    <MaterialCommunityIcons 
                    style={{
                        alignContent: "center",
                        justifyContent: "space-between",
                        marginTop: "10px",
                        padding: "20px",
                        // height: wp("10px"),
                    }}
                    name="heart-outline" size={24} color="black"
 />       My Favourite                </Text>
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

                }}>
                
                <Text style={{
                    justifyContent: "space-between",
                }}>
                    <MaterialCommunityIcons 
                    style={{
                        alignContent: "center",
                        justifyContent: "space-between",
                        marginTop: "10px",
                    }}
                    name="heart-outline" size={24} color="black" />       My Favourite                </Text>
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

                }}>
                
                <Text style={{
                    justifyContent: "space-between",
                }}>
                    <MaterialCommunityIcons 
                    style={{
                        alignContent: "center",
                        justifyContent: "space-between",
                        marginTop: "10px",
                    }}
                    name="heart-outline" size={24} color="black" />       My Favourite                </Text>
 <MaterialIcons name="arrow-forward-ios" size={23} color="#A7AEC1" />
                </View>
            </TouchableOpacity>

            {/* Add the log out button */}
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

                }}>
                
                <Text style={{
                    justifyContent: "space-between",
                }}>
                    <MaterialCommunityIcons 
                    style={{
                        alignContent: "center",
                        justifyContent: "space-between",
                        marginTop: "10px",
                    }}
                    name="heart-outline" size={24} color="black" />       Log Out               </Text>
 <MaterialIcons name="arrow-forward-ios" size={23} color="#A7AEC1" />
                </View>
            </TouchableOpacity>
            {/* Set up tab navigation at the bottom */}

        </View>
             
      </View>
    </View>
  );
};

export default Profile;

import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

class Home extends Component {
    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
    };

    clickLogout = () => {
        this.props.navigation.popToTop()
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "black", fontWeight:"900", margin:10, fontSize:30 }}>User Infromation</Text>
                <Image
                    style={{ width: 150, height: 150, marginTop:10, marginBottom:10 }}
                    source={{ uri: this.props.navigation.getParam("user_imageurl") }}
                />
                <Text style={{ color: "black", fontWeight:"700", margin:5 }}>User Email ID:- {this.props.navigation.getParam("user_email")}</Text>
                <Text style={{ color: "black", fontWeight:"700", margin:5 }}>User Name:- {this.props.navigation.getParam("user_name")}</Text>
                <Text style={{ color: "black", fontWeight:"700", margin:5 }}>User Google ID:- {this.props.navigation.getParam("user_id")}</Text>
                
                <TouchableOpacity onPress={this.clickLogout} style={{backgroundColor:"blue", marginTop:10, borderRadius:5}}>
                    <Text style={{ color: "white", fontWeight:"700", margin:10 }}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

export default Home;
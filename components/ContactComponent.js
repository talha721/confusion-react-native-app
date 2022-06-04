import React, { Component } from "react";
import { View, Text } from "react-native";
import { CONTACT } from "../shared/contact";
import { Card, Divider } from "react-native-elements";

function RenderContact(props) {
  const item = props.item;

  if (item != null) {
    return (
      <Card>
        <Text
          style={{
            paddingBottom: 10,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Contact Information
        </Text>
        <Divider />
        <Text style={{ paddingTop: 10 }}>{item.address}</Text>
        <Text style={{ paddingTop: 10 }}>Tel: {item.tel}</Text>
        <Text style={{ paddingTop: 10 }}>Fax: {item.fax}</Text>
        <Text style={{ paddingTop: 10 }}>Email: {item.email}</Text>
      </Card>
    );
  }
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: CONTACT,
    };
  }

  static navigationOptions = {
    title: "Contact",
  };

  render() {
    return (
      <View>
        <RenderContact item={this.state.contactInfo} />
      </View>
    );
  }
}

export default Contact;

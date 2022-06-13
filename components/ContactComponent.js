import React, { Component } from "react";
import { View, Text } from "react-native";
import { CONTACT } from "../shared/contact";
import { Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";

function RenderContact(props) {
  const item = props.item;

  if (item != null) {
    return (
      <Card title={"Contact Information"}>
        <Text>{item.address}</Text>
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
        <Animatable.View animation={"fadeInDown"} duration={2000} delay={1000}>
          <RenderContact item={this.state.contactInfo} />
        </Animatable.View>
      </View>
    );
  }
}

export default Contact;

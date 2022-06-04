import React, { Component } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import { Card, Divider, ListItem } from "react-native-elements";
import { LEADERS } from "../shared/leaders";

function RenderOurHistory() {
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
        Our History
      </Text>
      <Divider />
      <Text style={{ paddingTop: 10, paddingBottom: 10 }}>
        Started in 2010, Ristorante con Fusion quickly established itself as a
        culinary icon par excellence in Hong Kong. With its unique brand of
        world fusion cuisine that can be found nowhere else, it enjoys patronage
        from the A-list clientele in Hong Kong. Featuring four of the best
        three-star Michelin chefs in the world, you never know what will arrive
        on your plate the next time you visit us.
      </Text>
      <Text>
        The restaurant traces its humble beginnings to The Frying Pan, a
        successful chain started by our CEO, Mr. Peter Pan, that featured for
        the first time the world's best cuisines in a pan.
      </Text>
    </Card>
  );
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS,
    };
  }

  static navigationOptions = {
    title: "About Us",
  };

  render() {
    const { navigate } = this.props.navigation;

    const renderLeaders = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: require("./images/alberto.png") }}
        />
      );
    };

    return (
      <ScrollView>
        <RenderOurHistory />
        <Card>
          <Text
            style={{
              paddingBottom: 10,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Corporate History
          </Text>
          <Divider />
          <FlatList
            data={this.state.leaders}
            renderItem={renderLeaders}
            keyExtractor={(leader) => leader.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default About;

import React, { Component } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    leaders: state.leaders,
  };
};

function RenderOurHistory() {
  return (
    <Card title={"Our History"}>
      <Text style={{ paddingBottom: 10 }}>
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
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        />
      );
    };

    return (
      <ScrollView>
        <RenderOurHistory />
        <View>
          <Card title={"Corporate History"}>
            <FlatList
              data={this.props.leaders.leaders}
              renderItem={renderLeaders}
              keyExtractor={(leader) => leader.id.toString()}
            />
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(About);

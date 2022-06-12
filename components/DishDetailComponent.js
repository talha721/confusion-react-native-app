import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Modal,
  StyleSheet,
  Button,
} from "react-native";
import { Card, Icon, Rating, Input } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { postFavorite } from "../redux/Actions/favoriteActions";
import { postComment } from "../redux/Actions/commentsAction";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
});

function RenderDish(props) {
  const dish = props.dish;

  if (dish != null) {
    return (
      <Card featuredTitle={dish.name} image={{ uri: baseUrl + dish.image }}>
        <Text style={{ margin: 10 }}>{dish.description}</Text>
        <View style={styles.icons}>
          <Icon
            name={props.favorite ? "heart" : "heart-o"}
            type="font-awesome"
            color="#f50"
            raised
            reverse
            onPress={() =>
              props.favorite ? console.log("already favorite") : props.onPress()
            }
          />
          <Icon
            name="pencil"
            type="font-awesome"
            raised
            reverse
            color="#512DA8"
            onPress={() => props.toggleModal()}
          />
        </View>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

function RenderComments(props) {
  const comments = props.comments;

  const renderCommentItem = ({ item, index }) => {
    return (
      <View key={index} style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}>{item.comment}</Text>
        <Rating imageSize={20} readonly startingValue={item.rating} />
        <Text style={{ fontSize: 12 }}>
          {"-- " + item.author + ", " + item.date}
        </Text>
      </View>
    );
  };

  return (
    <Card title="Comments">
      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Card>
  );
}

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      rating: 1,
      author: "",
      comment: "",
      showModal: false,
    };
  }

  markFavorite(dishId) {
    this.props.postFavorite(dishId);
  }

  static navigationOptions = {
    title: "Dish Details",
  };

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
    this.resetForm();
  }

  handleComment() {
    const dishId = this.props.navigation.getParam("dishId", "");
    this.props.postComment(
      dishId,
      this.state.rating,
      this.state.author,
      this.state.comment
    );
    console.log(JSON.stringify(this.state));
    this.toggleModal();
  }

  resetForm() {
    this.setState({
      rating: 1,
      author: "",
      comment: "",
    });
  }

  render() {
    const dishId = this.props.navigation.getParam("dishId", "");
    return (
      <ScrollView>
        <RenderDish
          dish={this.props.dishes.dishes[+dishId]}
          favorite={this.props.favorites.some((el) => el === dishId)}
          onPress={() => this.markFavorite(dishId)}
          toggleModal={() => this.toggleModal()}
        />
        <RenderComments
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === dishId
          )}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showModal}
          onDismiss={() => {
            this.toggleModal();
            this.resetForm();
          }}
          onRequestClose={() => {
            this.toggleModal();
            this.resetForm();
          }}
        >
          <View style={styles.modal}>
            <View>
              <Rating
                type="star"
                defaultRating={1}
                count={5}
                showRating
                onFinishRating={(selectedValue) =>
                  this.setState({ rating: selectedValue })
                }
                startingValue={1}
              />
            </View>
            <View>
              <Input
                placeholder="Author"
                onChangeText={(value) => this.setState({ author: value })}
                leftIcon={
                  <Icon
                    name="user-o"
                    type="font-awesome"
                    size={24}
                    color="black"
                  />
                }
              />
            </View>
            <View>
              <Input
                placeholder="Comment"
                onChangeText={(value) => this.setState({ comment: value })}
                leftIcon={
                  <Icon
                    name="comment-o"
                    type="font-awesome"
                    size={24}
                    color="black"
                  />
                }
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Button
                title="SUBMIT"
                color="#512DA8"
                onPress={() => this.handleComment()}
              />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Button title="CANCEL" onPress={() => this.toggleModal()} />
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  icons: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);

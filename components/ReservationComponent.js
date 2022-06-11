import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Switch,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Card } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 1,
      smoking: false,
      date: "",
      DatePickerVisibility: false,
    };
  }

  static navigationOptions = {
    title: "Reserve Table",
  };

  handleReservation() {
    console.log(JSON.stringify(this.state));
    this.setState({
      guests: 1,
      smoking: false,
      date: "",
      DatePickerVisibility: false,
    });
  }

  showDatePicker() {
    this.setState({ DatePickerVisibility: true });
  }

  hideDatePicker() {
    this.setState({ DatePickerVisibility: false });
  }

  handleConfirm(date) {
    console.warn("A date has been picked: ", date);
    this.setState({ date: date });
    this.hideDatePicker();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Number of Guests</Text>
          <Picker
            style={styles.formLabel}
            selectedValue={this.state.guests}
            onValueChange={(itemValue, ItemIndex) =>
              this.setState({ guests: itemValue })
            }
          >
            <Picker.Item label={"1"} value={"1"} />
            <Picker.Item label={"2"} value={"2"} />
            <Picker.Item label={"3"} value={"3"} />
            <Picker.Item label={"4"} value={"4"} />
            <Picker.Item label={"5"} value={"5"} />
            <Picker.Item label={"6"} value={"6"} />
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Smoking/Non-Smoking?</Text>
          <Switch
            style={styles.formItem}
            value={this.state.smoking}
            onTintColor={"#512DA8"}
            onValueChange={(value) => this.setState({ smoking: value })}
          ></Switch>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date and Time</Text>
          <Button
            title="Show Date Picker"
            onPress={() => this.showDatePicker()}
          />
          <DateTimePickerModal
            isVisible={this.state.DatePickerVisibility}
            onConfirm={(date) => this.setState({ date: date })}
            onCancel={this.hideDatePicker}
            style={{ flex: 2, marginRight: 20 }}
            // date={this.state.date}
            format={""}
            mode={"datetime"}
            placeholder={"select date and time"}
            minDate={"2017-01-01"}
            confirmBtnText={"Confirm"}
            cancelBtnText={"Cancel"}
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            // onDateChange={(date) => {
            //   this.setState({ date: date });
            // }}
          />
        </View>
        <View style={styles.formRow}>
          <Button
            title={"Reserve"}
            color={"#512DA8"}
            onPress={() => this.handleReservation()}
            accessibilityLabel={"Learn more about this purple button"}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
});

export default Reservation;
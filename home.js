import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { setName, deleteName } from "./redux";
import { store } from "./redux";

export class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text style={{ marginTop: 100 }}>My name is {this.props.name}.</Text>
        <View style={{ flexDirection: "row" }}>
          <Button
            onPress={() => {
              this.props.deleteName();
            }}
            title="deleteName"
          />
          <Button
            onPress={() => {
              this.props.setName("かみおか");
            }}
            title="setName"
          />
        </View>
        <Text style={{ marginBottom: 100 }}>
          現在のstore: {JSON.stringify(store.getState())}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  // store は巨大な Json の塊なので、nameにjsonから取ってきたデータを代入している
  name: state.user.name,
});

const mapDispatchToProps = {
  // importしたactionCreatorを記述
  setName,
  deleteName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

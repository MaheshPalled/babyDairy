import React, { Component } from 'react';
import {
  ProgressChart
} from "react-native-chart-kit";
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { Slider } from 'react-native-elements';

export default function HomeProgressChartComponent() {
  const data = {
    labels: ["Ready"], 
    data: [0.8]
  };

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    // backgroundGradientFrom: "#3d70d1",
    // backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: "#3d70d1",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(79, 173, 109, ${opacity})`,
    // strokeWidth: 2, // optional, default 3
    barPercentage: 1.0,
    useShadowColorFromDataset: false // optional
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bezier Line Chart</Text>
      <ProgressChart
        data={data}
        width={screenWidth}
        height={200}
        strokeWidth={16}
        radius={80}
        chartConfig={chartConfig}
        hideLegend={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:20,
    color:'#4fad6d'
  }

});

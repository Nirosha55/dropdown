
// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import Pie from 'react-native-pie';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           padding: 120,
//           alignItems: 'center',
//           flexDirection: 'row',
//           justifyContent: 'center',
//         }}>
//         <Pie
//           radius={100}
//           innerRadius={60}
//           sections={[

//             {
//               percentage: 15,
//               color: '#EBD22F',
//             },
//             {
//               percentage: 16,
//               color: '#f58a42',
//             },
//             {
//               percentage: 10,
//               color: '#42f2f5',
//             },
//             {
//               percentage: 10,
//               color: '#6e3e8c',
//             },
//             {
//               percentage: 36,
//               color: '#666869',
//             },
//             {
//               percentage: 13,
//               color: '#65db88',
//             },
//           ]}
//           dividerSize={6}
//           strokeCap={'butt'}
//         />
//         {/* green*/}
//         <Text
//           style={{
//             position: 'absolute',
//             top: 100,
//             left: '80%',
//             color: 'black',
//           }}>
//           13%(8)
//         </Text>
//         {/* yellow */}
//         <Text
//           style={{
//             position: 'absolute',
//             top: 110,
//             right: '70%',
//             color: 'black',
//           }}>
//           15%(9)
//         </Text>

//         {/* red */}
//         <Text
//           style={{
//             position: 'absolute',
//             top: 190,
//             right: '30%',
//             color: 'black',
//           }}>
//           18%(11)
//         </Text>
//         {/* blue */}
//         <Text
//           style={{
//             position: 'absolute',
//             bottom: 130,
//             right: '50%',
//             color: 'black',
//           }}>
//           10%(6)
//         </Text>
//         {/* violet */}
//         <Text
//           style={{
//             position: 'absolute',
//             bottom: 95,
//             right: '95%',
//             color: 'black',
//           }}>
//           10%(6)
//         </Text>

//         {/* grey */}
//         <Text
//           style={{
//             position: 'absolute',
//             bottom: 170,
//             left: '30%',
//             color: 'black',
//           }}>
//           36%(20)
//         </Text>
//       </View>
//     </View>
//   );
// };
// export default App;

// const styles = StyleSheet.create({
//   container: {alignItems: 'center', justifyContent: 'center'},
// });
// import React from 'react';
// import {StyleSheet, View, Dimensions} from 'react-native';
// const screenWidth = Dimensions.get('window').width;
// import {
//   LineChart,
//   chartConfig
// } from 'react-native-chart-kit';

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//     },
//   ],
// };
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <LineChart
//         data={data}
//         width={screenWidth}
//         height={220}
//         chartConfig={chartConfig}
//       />
//     </View>
//   );
// }
// export default App;
// const styles = StyleSheet.create({
//   container: {alignItems: 'center', justifyContent: 'center'},
// });
// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import {LineChart} from 'react-native-line-chart';
// import {Dimensions} from 'react-native';
// const screenWidth = Dimensions.get('window').width;
// const App = () => {
//   return (
//     <View>
//       <Text> Line Chart</Text>
//       <LineChart
//         data={{
//           labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
//           datasets: [
//             {
//               data: [
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100,
//               ],
//             },
//           ],
//         }}
//         width={Dimensions.get('window').width} // from react-native
//         height={250}
//         chartConfig={{
//           backgroundColor: 'blue',
//           backgroundGradientFrom: 'darksalmon',
//           backgroundGradientTo: 'black',
//           decimalPlaces: 1, // optional, defaults to 2dp
//           color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//         }}
//         LineChart
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />
//     </View>
//   );
// };

// export default App;

{/* <Chart
  style={{ height: 200, width: '100%', marginTop: 40 }}
  data={[
  { x: 5, y: 15 },
  { x: 6, y: 6 },
  { x: 7, y: 15 },
  { x: 8, y: 3 },
]}
  padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  xDomain={{ min: 5, max: 8 }}
>
  <VerticalAxis
    tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
    theme={{
      axis: { stroke: { color: '#aaa', width: 2 } },
      ticks: { stroke: { color: '#aaa', width: 2 } },
      labels: { formatter: (v: number) => v.toFixed(2) },
    }}
  />
  <HorizontalAxis
    tickCount={9}
    theme={{
      axis: { stroke: { color: '#aaa', width: 2 } },
      ticks: { stroke: { color: '#aaa', width: 2 } },
      labels: { label: { rotation: 50 }, formatter: (v) => v.toFixed(1) },
    }}
  />
  <Line theme={{ stroke: { color: 'red', width: 2 } }} />
  <Line smoothing="bezier" tension={0.15} theme={{ stroke: { color: 'blue', width: 2 } }} />
  <Line smoothing="bezier" tension={0.3} theme={{ stroke: { color: 'green', width: 2 } }} />
  <Line smoothing="cubic-spline" tension={0.3} theme={{ stroke: { color: 'orange', width: 2 } }} />
</Chart>
</Container> */}
import React from 'react';
import {View, StyleSheet,Image,Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('./assets/vanshu.jpeg')} style={styles.img1} />
      </View>
      <View style={styles.middle}>
        <Image source={require('./assets/Snoopy.png')} style={styles.img2} />
      </View>
      <View style={styles.bottom}>
        <Image source={require('./assets/chinnu.png')} style={styles.img3} />
        <Text style={{justifyContent:'center'}}>{ "chinuuu i love you "}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: 'beige',
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

  },
  img1: {
    margin: 10,
    width: 320,
    height: 180,
  },
  img2: {
    margin: 10,
    width: 320,
    height: 180,
  },
  img3: {
    margin: 10,
    width: 150,
    height: 180,
  },
});

export default App;
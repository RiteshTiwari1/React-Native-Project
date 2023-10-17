import React, { Component } from 'react'
import { SafeAreaView, Text, View , Button} from 'react-native'

// export class App extends Component {
//   render() {
//     return (
//       <SafeAreaView>
//         <view>
//         <Text>  hello </Text>
//         </view>
//       </SafeAreaView>
//     )
//   }
// }

function App() {
    return (
      <SafeAreaView>
        <View>
          <Text>Hello World</Text>
          <Button title="Click Me" onPress={() => alert('Button Clicked!')} />
        </View>
      </SafeAreaView>
    );
}
  
export default App;
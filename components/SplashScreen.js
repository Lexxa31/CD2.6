import * as React from 'react';
import { 
  Text,
  View,
  Image,
  StyleSheet,
  Animated,
  Easing 
} from 'react-native';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1)
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 1000,
          ease: Easing.linear,
          useNativeDriver: true
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 1000,
          ease: Easing.linear,
          useNativeDriver: true
        })
      ])
    ).start();
  }

  render() {
      return (
        <Animated.View style={[styles.container, {opacity: this.state.opacity}, backgroundColor="#000000"]}>
          <Image
        source={{
          uri:
            'https://lh3.googleusercontent.com/A680zCqa0WmIeqxq6sX70uwvD7whkuDQIQEBYE_hgd347ZtQQ7eZ4J_smWy8XeTHdLiq7Xx-DnP4SjJ19rFWxGv9VPzJfm_zw9hk-iM=s0',
        }}
        style={{ width: 300, height: 300 }}
      />
        </Animated.View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 8,
  }
});

export default SplashScreen;

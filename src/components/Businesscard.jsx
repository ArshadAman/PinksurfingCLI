import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const Businesscard = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <Image
        style={{ width: 40, height: 40, margin: 10, position: 'absolute', top: '50%', right: 0 }}
        source={require('../../assets/pinksurfAssets/name.png')}
      />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* Your EasyFlipView front */}
        <View>
          <Image
            style={{ width: 100, height: 100, marginTop: 10 }}
            source={require('../../assets/pinksurfAssets/swap.png')}
          />
          {/* Other elements in the front side */}

          <TouchableOpacity style={{}}>
            <Text style={{}}>Download the App</Text>
          </TouchableOpacity>
        </View>

        {/* Your EasyFlipView back */}
        <View>
          {/* Elements for the back side */}
        </View>
      </View>

      <TouchableOpacity
        style={{ width: 40, height: 40, position: 'absolute', bottom: 0, right: 0 }}
      >
        <Image
          style={{ width: 40, height: 40, padding: 5 }}
          source={require('../../assets/pinksurfAssets/name.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Businesscard;

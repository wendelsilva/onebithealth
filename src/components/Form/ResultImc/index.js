import React from 'react';
import { Text, View, TouchableOpacity, Share } from 'react-native';

import { styles } from './style';

export function ResultImc(props) {

  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é: " + props.resultImc,
    })
  }

  return (
    <View style={styles.contextImc}>
        <Text style={styles.information}>{props.messageResultImc}</Text>
        <Text style={styles.resultImc}>{props.resultImc}</Text>
        <View style={styles.boxShareButton}>
          <TouchableOpacity 
            style={styles.shared} 
            onPress={onShare}
          >
            <Text style={styles.sharedText}>Share</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
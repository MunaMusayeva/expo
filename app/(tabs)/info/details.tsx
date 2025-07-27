// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Details = () => {
//   return (
//     <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
    
//       <Text>Details Page</Text>
//     </View>
//   )
// }

// export default Details

import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Details = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-[#fce6f2] px-4">
      <View className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm items-center">
        <Text className="text-2xl font-bold text-[#333333] mb-2">Details Page</Text>
        <Text className="text-base text-gray-600 text-center mb-4">
          Bu sehife Info sehifesinden geldiyin detallari gostermek ucundur.
        </Text>
        <TouchableOpacity
          className="bg-[#ed9fd0] px-6 py-2 rounded-full"
          onPress={() => router.back()}
        >
          <Text className="text-[#333333] font-semibold text-base">Geri Qayit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

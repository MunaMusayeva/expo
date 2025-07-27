import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Info = () => {
  return (
    <View className="flex-1 items-center justify-center bg-[#fce6f2] px-4">
      <View className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm items-center">
        <Text className="text-2xl font-bold text-[#333333] mb-2">Info Page</Text>
        <Text className="text-base text-gray-600 text-center mb-4">
          Bu sehife esas melumatlara baxmaq ucundur.
        </Text>
        <Link
          href="/(tabs)/info/details"
          className="bg-[#ed9fd0] px-6 py-2 rounded-full"
        >
          <Text className="text-[#333333] font-semibold text-base">Go to Details</Text>
        </Link>
      </View>
    </View>
  );
};

export default Info;

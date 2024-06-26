import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useRouter } from 'expo-router';


import CustomCard from '@/components/ui/CustomCard';
import TVButton from '@/components/common/TVButton';

const hotels = [
  {
    id: 1,
    name: 'Hotel Sunshine',
    description: 'Enjoy your stay at the heart of the city with luxury amenities.',
    image: 'https://example.com/hotel-sunshine.jpg'
  },
  {
    id: 2,
    name: 'Ocean View Resort',
    description: 'A perfect place to relax with a stunning ocean view.',
    image: 'https://example.com/ocean-view-resort.jpg'
  },
  {
    id: 3,
    name: 'Mountain Retreat',
    description: 'Escape to the tranquility of the mountains.',
    image: 'https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcHi24sFxm+TFZ5/yA+MYIRt6NpNOjjaAVLi1UwRhfhOIbLYx6ho8BmHpgS+VGCvTsA=='
  },
];

export default function HomeScreen() {
  const router = useRouter();

  const navigateToProfile = () => {
    router.push('/profile');
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-3xl font-bold text-center mb-6">Home</Text>
      <View className="mb-6">
        {hotels.map(hotel => (
          <CustomCard
            key={hotel.id}
            name={hotel.name}
            description={hotel.description}
            image={hotel.image}
            onViewPress={() => alert(`More about ${hotel.name}`)}
            onBookPress={() => alert(`Booked ${hotel.name}`)}
          />
        ))}
      </View>
      <TVButton
        mode="contained"
        onPress={navigateToProfile}
        className="mt-2"
      >
        Go to Profile
      </TVButton>
    </ScrollView>
  );
}

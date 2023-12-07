import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native';

import option1 from './background_options/115.jpg';
import option2 from './background_options/113.jpg';
import option3 from './background_options/119.jpg';
import option4 from './background_options/117.jpg';
import option5 from './background_options/114.jpg';
import option6 from './background_options/110.jpg';

const backgroundOptions = [
  { id: 1, image: option1 },
  { id: 2, image: option2 },
  { id: 3, image: option3 },
  { id: 4, image: option4 },
  { id: 5, image: option5 },
  { id: 6, image: option6 },
];

const BackgroundSelection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (imageId) => {
    setSelectedImage(imageId);
  };

  const renderItem = (item) => (
    <TouchableOpacity
      onPress={() => handleImageSelect(item.id)}
      style={[styles.imageContainer, selectedImage === item.id && styles.selectedImage]}>
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );

  const handleConfirm = () => {
    if (selectedImage !== null) {
      console.log(`Image ${selectedImage} selected`);
    } else {
      console.log('Please select an image');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      {backgroundOptions.map(({ id, image }) => renderItem({ id, image, key: id }))}
      </ScrollView>
      <Button title="Confirm" onPress={handleConfirm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',   
    justifyContent: 'center',
  },

  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 12, 
  },
  imageContainer: {
    margin: 5,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 5,
    overflow: 'hidden',
  },
  selectedImage: {
    borderColor: 'blue',
  },
  image: {
    width: 100,
    height: 120,
  },


});

export default BackgroundSelection;



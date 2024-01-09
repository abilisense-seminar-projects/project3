import React, { useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import GenericButton from "../components/shared/button";
import RecordAudio from "../components/recording/recording";
import patientService from "../services/backendServices/patientService";

import { setUnreadNotification } from "../redux/actions/patientAction";

const PatientScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [countNotifications, setCountNotifications] = useState(" ");

  const receiverId = useSelector((state) => state.user.user.userData._id);

  //gets therapists list by receiver id
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("receiverId 0 ", receiverId);
        const response = await patientService.unreadNotifications(receiverId);
        if (response) {
          dispatch(setUnreadNotification(response));
          setCountNotifications(response);
          console.log("response. ", response);
        } else {
          console.log("Invalid response data - CountNotifications:", 0);
          // console.error("Invalid response data:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // } finally {
        //   setIsLoading(false);
      }
    };
    fetchData();
  }, [receiverId, setCountNotifications]);

  const name = useSelector((state) => state.user.user.userData.firstName);
  console.log("firstName ", name);
  const image = useSelector((state) => state.user.user.userData.image);
  console.log("image ", image);
  // Move the useSelector inside the component
  const user = useSelector((state) => state.userReucer);

  const handleWordListPress = () => {
    return user.listOfWords; // update in DB
  };

  return (
    // <View accessible={true}></View>
     <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.backgroundImage} resizeMode="cover" />}
     <View style={styles.content}>
       <Text>hello {name}</Text>
       <Button title="רשימת מילים" onPress={handleWordListPress} />
     </View>
   </View>
 
  );
};

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 15,
    marginBottom: 15,
  },
  backgroundImage: {
    position: 'absolute',
    // top: 0,
    // left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default PatientScreen;


// import React from "react";
// import { View, Button, Text, StyleSheet, ImageBackground } from "react-native";
// import { useSelector } from "react-redux";

// const PatientScreen = () => {
//   const name = useSelector((state) => state.user.user.userData.firstName);
//   const image = useSelector((state) => state.user.user.userData.image);

//   const handleWordListPress = () => {
//     // פונקציה שמעדכנת את רשימת המילים במסד הנתונים
//   };

//   return (
//     <ImageBackground source={{ uri: image }} style={styles.backgroundImage}>
//       <View style={styles.content}>
//         <Text>שלום {name}</Text>
//         <Button title="רשימת מילים" onPress={handleWordListPress} />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default PatientScreen;



// import React from "react";
// import { View, Button, Text, StyleSheet, ImageBackground } from "react-native";
// import { useSelector } from "react-redux";

// const PatientScreen = () => {
//   const name = useSelector((state) => state.user.user.userData.firstName);
//   const image = useSelector((state) => state.user.user.userData.image);

//   const handleWordListPress = () => {
//     // פונקציה שמעדכנת את רשימת המילים במסד הנתונים
//   };

//   return (
//     <ImageBackground source={{ uri: image }} style={styles.backgroundImage} resizeMode="cover">
//       <View style={styles.content}>
//         <Text>שלום {name}</Text>
//         <Button title="רשימת מילים" onPress={handleWordListPress} />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // סגנונות נוספים לפי צורך
//   },
// });

// export default PatientScreen;

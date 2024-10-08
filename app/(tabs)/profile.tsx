import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useAuth } from '../context/AuthContext'; // Adjust the import path as per your project structure
import { logout } from '../AuthService'; // Adjust the import path as per your project structure
import { useRouter } from 'expo-router';
import LoginFormBottomSheet from '@/components/auth/LoginFormBottomSheet';

const Profile = () => {
  const { isAuthenticated , userInfo, checkAuthStatus }:any = useAuth();
  const [isLanguageSwitcherVisible, setIsLanguageSwitcherVisible] = useState(false);

const router =  useRouter()


  useEffect(() => {
    
    // Update user info when component mounts or auth status changes
    checkAuthStatus();
  }, [isAuthenticated]);



  const handleLogout = async () => {
    await logout(); // will removed local storage 
    checkAuthStatus(); // Update auth status after logout
    router.replace('/profile'); // after logout will redirect back to profile page
  };


  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <>
          <View style={styles.profileSection}>
            <Image
              source={{ uri: userInfo?.avatar || 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg' }}
              style={styles.profileImage}
            />
            <Text style={styles.fullName}>{userInfo?.name}</Text>
            <Text style={styles.fullName}>{userInfo?.email}</Text>
          </View>

          {/* start LanguageSwitcher */}

          <View style={styles.section}>
            <TouchableOpacity onPress={() => setIsLanguageSwitcherVisible(!isLanguageSwitcherVisible)} style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                <FeatherIcon color="#fff" name="globe" size={20} />
              </View>
              <Text style={styles.rowLabel}>Language</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>
            {isLanguageSwitcherVisible && <LanguageSwitcher />}
          </View>
          {/* end LanguageSwitcher */}

          {/* start Logout Btn */}

          <View style={styles.section}>
            <TouchableOpacity onPress={handleLogout} style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#ff0066' }]}>
                <FeatherIcon color="#fff" name="log-out" size={20} />
              </View>
              <Text style={styles.rowLabel}>Logout</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
          {/* end Logout Btn */}

        </>
      ) : (
        <>
          <LoginFormBottomSheet/>

          <View style={styles.section}>
            <TouchableOpacity onPress={() => setIsLanguageSwitcherVisible(!isLanguageSwitcherVisible)} style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                <FeatherIcon color="#fff" name="globe" size={20} />
              </View>
              <Text style={styles.rowLabel}>Language</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>
            {isLanguageSwitcherVisible && <LanguageSwitcher />}
          </View>

     

   
        </>
      )} 
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 35,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  fullName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 16,
    padding: 4,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
  },
  rowSpacer: {
    flex: 1,
  },
});

export default Profile;

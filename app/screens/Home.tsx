import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from '../context/AuthContext';

const Home = () => {
    const [users, setUsers] = useState<any[]>([]);


    useEffect(() => {
        const loadUser = async () => {
            try {
            const result = await axios.get(`${API_URL}/users`);
            console.log(result.data);
            setUsers(result.data);
        }catch (e: any) {
            // console.log(e);
            alert(e.message)
        }
    }
        loadUser();
    }, []);


  return (
    <ScrollView>
      <Text>Home</Text>
      {users.map((user) => (
        <Text key={user.id}>{user.email}</Text>
      ))}
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})
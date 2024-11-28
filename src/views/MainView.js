import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator  } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '@/features/hello/helloSlice'

const MainView = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.hello)

  // Llamar a la API cuando el componente se monta
  useEffect(() => {
    console.log('AQUI')
    dispatch(getItems())
  }, [dispatch])

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    )
  }

  return (
    <View>
      {data ? (
        <Text>Respuesta del servidor: {JSON.stringify(data)}</Text>
      ) : (
        <Text>No hay datos disponibles</Text>
      )}
    </View>
  );
}



export default MainView
import React, { useEffect, useState, Component } from "react"
import { StyleSheet, View, Text, PROVIDER_GOOGLE } from "react-native";
import MapView, { AnimatedRegion } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";


const LOCATION_TASK_NAME = "LOCATION_TASK_NAME"
let foregroundSubscription = null


export default function Map() {
  
  const [coordinate, setCoordinate] = useState([])


useEffect(() => {
  fetch('http://localhost:3000/trail/?collegeid=ef8f0795-9036-4301-b56f-48995494fcfe')
  .then((response) => response.json())
  .then((json) => {setCoordinate(calculateCoordinate(json))});

}, []);
  
  
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCxNyXMh_uKq0TXPpQ8fjb9oTb2XfB4gNM'
      const Path = (origin, destination) => {
        return (
          <MapViewDirections 
            origin = {origin}
            destination = {destination}
            apikey = {GOOGLE_MAPS_APIKEY} 
            strokeWidth = {1000}
            strokeColor = "hotpink"/>
        )
      }

      

  const calculateCoordinate = (data) => {
    new_coord = []

      data.forEach(function(k) {

        const c = []

        k.trailposition.forEach(function(i) {
          const j = {
              latitude: i.latitude,
              longitude: i.longitude
          }
          c.push(j)

        })

        new_coord.push(c)

      })
     return new_coord;
  }
    
  // const MapList = []
  // coordinate.forEach(function(c) {c.slice(0,-1).map((item, index) => {
  //   MapList.push(<Path origin={c[index]} destination={c[index+1]}></Path>)}
  // )})
    

    
   
  return(
    <View style={styles.container}>
        <MapView style={{height: '100%', width:'100%'}} initialRegion={{
            latitude: 42.4440,
            longitude: -76.5019,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            mapType: "standard",
            zoomEnabled: true,
            scrollEnabled: true,
            showsScale: true
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}>

      <MapViewDirections 
            // origin = {origin}
            // destination = {destination}
            origin = {{latitude: 42.4441, longitude: -76.5020}}
            destination = {{latitude: 43.4444, longitude: -76.5030}}
            apikey = {GOOGLE_MAPS_APIKEY} 
            strokeWidth = {10}
            strokeColor = "red"/>
          {/* {MapList} */}
          {/* {coordinate.forEach(function(c) {c.slice(0,-1).map((item, index) => {
            return (<Path origin={c[index]} destination={c[index+1]}></Path>)}
          )})} */}
        </MapView>
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginTop: 15,
  },
  separator: {
    marginVertical: 8,
  },
})
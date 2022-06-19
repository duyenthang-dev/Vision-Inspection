import { StyleSheet, Text, View, Button, Alert, TouchableHighlight } from 'react-native'
import React from 'react'
import CardDetails from './CardDetails'
import ReadMore from '@fawazahmed/react-native-read-more';
import Icon from 'react-native-vector-icons/FontAwesome';


const dimenImg = require('./../assets/images/dimension.jpg')
const hammer = require('./../assets/images/hammer.jpg')
const surface = require('./../assets/images/surface.jpg')
const color = require('./../assets/images/color.jpg')




const InspectDetails = () => {
  return (
    <View style={styles.layout}>
      <View style={styles.firstBar}
      >
        <Icon name='check' style={{color: 'green', fontSize: 16}}>
          <Text style={styles.scanSuccessed}>{'  '}Đã quét thành công</Text>
        </Icon>
        
      </View>

      <View>
        <Text style={styles.object}>Bức tường phẳng</Text>
      </View>

      <View>
        <View>
          <Text style={styles.resultHeadline}>Kết quả phân tích</Text>
          <Text style={styles.modelHeadline}>Dựa trên số liệu train model</Text>
        </View>

        <View>
          <ReadMore numberOfLines={3} style={styles.resultContent}>
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget libero lacinia, feugiat nisl suscipit, egestas ante. Cras commodo est quis vulputate ultrices."}
          </ReadMore>
        </View>
      </View>
        
      <View style={styles.overCardContainer}>
          <View style={styles.cardContainer}>
            <CardDetails imgUrl={dimenImg} text={'Dimension'} desc={'Small'} />
            <CardDetails imgUrl={surface} text={'Surface'} desc={'Flat'} />
          </View>

          <View style={styles.cardContainer}>
            <CardDetails imgUrl={color} text={'Color'} desc={'Yellow'} />
            <CardDetails imgUrl={hammer} text={'Breakdown'} desc={'56%'} />
          </View>
      </View>

      <View>
        <TouchableHighlight 
          style={styles.touchableHighlight}
          onPress={() => Alert.alert('The result was saved')}
        >
          <Text style={styles.text}>Save the result</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default InspectDetails

const styles = StyleSheet.create({
  layout: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20
  },
  overCardContainer: {

  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingTop: 10,
    flex: 1,
 },
  scanSuccessed: {
    color: '#61AF2B',
    fontSize: 16,
  },
  object: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20
  },
  resultHeadline: {
    fontSize: 22,
    color: '#333333',
    marginBottom: 10,
  },
  modelHeadline: {
    fontSize: 16,
    color: "#8C8C8C",
    marginBottom: 10,
  },
  resultContent: {
    fontSize: 16,
    marginBottom: 20,
  },
  firstBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  touchableHighlight: {
    marginBottom: 30,
    marginTop: 30,
    alignItems: 'center',
  },
  text: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 80,
    paddingLeft: 80,
    backgroundColor: 'green',
    borderRadius: 15,
    color: 'white',
    fontSize: 20
  }
})
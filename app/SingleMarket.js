import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, Text, ScrollView, Button , Linking} from 'react-native';
import { Left, Right, Container, H1} from 'native-base'
import {SocialIcon} from 'react-native-elements';
import MarketMap from './MarketMap'

const SingleMarket = (props) => {

    // const [item, setItem] = useState(props.route.params.item)
    const item = props.route.params.item

    return (
        <Container style={styles.container}>
            <ScrollView 
                style={ styles.scrollView}
                contentContainerStyle={{ flexGrow: 1 }}
                >
                <View style={styles.imageContainer}>
                    <Image 
                        source={{
                            uri: item.image1 ? item.image1
                            : 'https://assets.londonist.com/uploads/2015/04/i875/horn-ok-please.jpg'
                        }}
                        resizeMode="contain"
                        style={styles.image}
                    />                 
                </View>    
                <View> 
                    <H1>
                    {item.name}
                    </H1>
                    <View style={{flexDirection: 'column'}}>
                    <SocialIcon
                        type="instagram"
                        onPress={() => Linking.openURL(item.insta_link)}
                        />
                    </View>
                    <View style={{flexDirection: 'column'}}>
                    <SocialIcon
                        type="facebook"
                        onPress={() => Linking.openURL(item.fb_link)}
                        />
                    </View>
                    <View style={{flexDirection: 'column'}}>
                    <SocialIcon
                        type="twitter"
                        onPress={() => Linking.openURL(item.twitter_link)}
                        />
                    </View>
                    <Text>
                    {item.description} 
                    </Text>
                    <Text>
                    Opening Hours:{"\n"}
                    {item.opening_hours} 
                    </Text>
                    <Text>
                    {item.formatted_address} 
                    </Text>
                </View> 
               
            <View style ={styles.mapContainer}>
                <MarketMap item = {item}/>
            </View>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 300
    },
    content: {
        // alignItems: 'center',
        width: 300,
        marginLeft: 35,
        marginRight: 35
    },
    header: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '800',
        fontSize: 28,
        marginTop: 24,
        marginBottom: 12
    },
    description: {
        fontFamily: 'Helvetica Neue'
    },
    subHeader: {
        fontFamily: 'Helvetica Neue',
        fontSize: 18,
        fontWeight: '700',
        marginTop: 12,
        marginBottom: 6
    },
    hours: {
        fontFamily: 'Helvetica Neue',
        lineHeight: 24,
        marginBottom: 12
    },
    address: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 12
    },
    mapContainer: {
        marginTop: 24,
        flex: 1,
        height: 450
    },
})


export default SingleMarket

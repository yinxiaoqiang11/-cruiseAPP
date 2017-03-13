/**
 * Created by lanou on 16/10/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    Image,
    ListView,
    ScrollView,
    TouchableOpacity
} from 'react-native';

let width=Dimensions.get("window").width;
let height=Dimensions.get("window").height;
let Mock= require('mockjs');
var Icon = require('react-native-vector-icons/FontAwesome');
let Swiper=require("react-native-swiper");

const data=[1,1,1,1,1,1];
class RH extends Component{
    constructor(props){
        super(props);
        ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }
    gobackrihanhangxian(){
        this.props.navigator.pop();
    }
    hanshu(vv){
        return(
            <View style={styles.bottom}>
                <View style={styles.left}>
                    <View style={styles.left1}>
                        <Text style={{fontSize:10,color:"#fff"}}>5晚6天</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={{color:"#414141",fontSize:14}}>2016年3月29日皇家加勒比海洋量子号上海-长崎-釜山-上海5晚6天</Text>
                    <View style={styles.right1}>
                        <Image
                            source={require("./../../tupian/ship/报名日期-列表.png")}
                            style={{width:10,height:10}}
                        />
                        <Text style={{color:"#a0a0a0",fontSize:10,marginLeft:5,marginRight:36}}>2016-03-29</Text>
                        <Image
                            source={require("./../../tupian/ship/港口-列表.png")}
                            style={{width:10,height:10}}
                        />
                        <Text style={{color:"#a0a0a0",fontSize:10,marginLeft:2}}>上海出发</Text>
                    </View>
                    <View style={styles.right_1}>
                        <View style={styles.right_2}>
                            <View style={styles.right_3}>
                                <View style={styles.right_4}></View>
                            </View>
                            <Text style={styles.right_5}>确认后支付</Text>
                        </View>
                        <View style={styles.right_r}>
                            <Text style={{color:"#ff6600",fontSize:12}}>￥</Text>
                            <View style={{marginTop:-2}}>
                                <Text style={{color:"#ff6600",fontSize:13}}>19660</Text>
                            </View>
                            <Text style={{color:"#8c8c8c",fontSize:12}}>起</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    render(){
        return(
               <View style={styles.container}>
                   <View style={styles.header}>
                       <View style={styles.top}>
                           <TouchableOpacity onPress={this.gobackrihanhangxian.bind(this)}>
                               <Image
                                   source={require("./../../tupian/ship/矩形-22-副本-5.png")}
                                   style={{width:20,height:20}}
                               />
                           </TouchableOpacity>
                       </View>
                       <Text style={styles.center}>日韩航线</Text>

                   </View>
                   <View style={{flex:1}}>
                       <ListView
                           dataSource={this.state.dataSource}
                           renderRow={this.hanshu.bind(this)}
                       />
                   </View>

                   <View style={styles.like}>
                       <View style={styles.like1}>
                            <Image
                                source={require("./../../tupian/ship/邮轮新-用户看列表psd.png")}
                                style={{width:15,height:15}}
                            />
                           <Text style={styles.like2}>综合</Text>
                       </View>
                       <View style={styles.like3}>
                           <Image
                               source={require("./../../tupian/ship/bei.png")}
                               style={{width:15,height:15}}
                           />
                           <Text style={styles.like2}>排序</Text>
                       </View>
                   </View>

               </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        justifyContent:"flex-start",
        flexDirection:"row",
        marginTop:30,
        paddingLeft:10,
        borderBottomColor:"#e5e5e5",
        borderBottomWidth:1,
        paddingBottom:7
    },
    top:{

    },
    center:{
        marginLeft:width*0.35,
        fontSize:17,
        color:"#818384"
    },
    bottom:{
        flex:1,
        flexDirection:"row",
        paddingTop:10,
        paddingLeft:10,
        borderTopColor:"#e5e5e5",
        borderTopWidth:1,
        width:width,
        paddingRight:10,
        marginBottom:10
    },
    left:{
        width:75,
        height:75,
        backgroundColor:"red",
        position:"relative",

    },
    left1:{
        position:"absolute",
        top:0,
        left:0,
        height:16,
        width:56,
        backgroundColor:"rgba(0,0,0,.5)",
        justifyContent:"center",
        alignItems:"center"
    },
    right:{
        width:280,
        marginLeft:9,
    },
    right1:{
        flexDirection:"row",
        marginTop:5,
        alignItems:"center",
        marginBottom:5,
    },
    right_1:{
        flexDirection:"row",
        justifyContent:"space-between",

    },
    right_2:{
        width:77,
        height:15,
        borderWidth:1,
        borderColor:"#60b5f6",
        borderRadius:8,
        position:"relative",
    },
    right_3:{
        width:15,
        height:15,
        borderWidth:1,
        borderColor:"#60b5f6",
        borderRadius:8,
        backgroundColor:"#60b5f6",
        position:"absolute",
        top:-1,
        left:-2,
        alignItems:"center",
        justifyContent:"center"
    },
    right_4:{
        width:8,
        height:2,
        backgroundColor:"#fff"
    },
    right_5:{
        color:"#60b5f6",
        fontSize:10,
        width:52,
        position:"absolute",
        top:1,
        right:8,
    },
    right_r:{
        flexDirection:"row",
        marginRight:10
    },
    like:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:width,
        height:40,
        backgroundColor:"#333333",
        alignItems:"center"
    },
    like1:{
        width:width*0.5,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:26,
        borderRightColor:"#fff",
        borderRightWidth:1
    },
    like2:{
        color:"#fff",
        fontSize:15,
        marginLeft:5
    },
    like3:{
        width:width*0.5,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }


});


module.exports=RH;
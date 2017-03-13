/**
 * Created by lanou on 16/10/20.
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
    TouchableOpacity,
    ScrollView
} from 'react-native';

let width=Dimensions.get("window").width;
let height=Dimensions.get("window").height;

let Mock= require('mockjs');
var Icon = require('react-native-vector-icons/FontAwesome');
let Swiper=require("react-native-swiper");
let Rihan=require("../rihan/rihan");
let Rihanhangxian=require("../rihan/rihanhangxian");
let top=170;

// class Rihann extends Component{
//     render(){
//         return(
//             <Rihan/>
//         )
//     }
// }

class Menu extends Component{
    constructor(props) {
        super(props);
        ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
            text:'',
            list:[],
            height:height,
        };
        this.xiu();
        this.set();
    }

    set(){
        setTimeout(()=>{
            this.setState({height:0})
        },2000)
    }

    xiu(){
        fetch('http://www.weilv100.com/api/cruise/index?city_id=149&assistant_id=0')
            .then((response) => response.json())
            .then((responseJson) => {
                let data=Mock.mock(responseJson);
                this.setState({
                    list:data.data.ad,
                    dataSource: ds.cloneWithRows(data.data.ad),
                    isUp:true
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    gotorihang(){
        this.props.navigator.push(
            {
                component:Rihan,
            }
        )

    }
    gotorihanhangxian(){
        this.props.navigator.push(
            {
                component:Rihanhangxian,
            }
        )
    }
    onscroll(event){
        let data=event.nativeEvent;
        if(data.contentOffset.y>=top){
            this.setState({
                isUp:false
            })
        }else{
            this.setState({
                isUp:true
            })
        }
    }
    hanhsu(rowdata){
        if(this.state.list.length){
            return(
                <ScrollView stickyHeaderIndices={[1]} scrollEventThrottle={200} onScroll={this.onscroll.bind(this)}>
                    <View>
                        <Swiper height={170}
                                dot={<View style={{backgroundColor: 'white', width: 6, height:6, borderRadius:6,
                                    marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />
                                }
                                onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                                paginationStyle={{
                                    bottom:25,
                                }}
                                activeDot={<View style={{backgroundColor: '#9da1bf', width: 6, height: 6, borderRadius: 6, marginLeft: 3,
                                    marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                                autoplay={true}

                        >
                            <TouchableOpacity onPress={this.gotorihang.bind(this)}>
                                <View style={styles.slide1}>
                                    <Image style={styles.image}
                                           resizeMode="stretch"
                                           source={{uri: "https://www.weilv100.com"+this.state.list[0].src}}
                                    />
                                    <View style={styles.slide11}>
                                        <Text style={{fontSize:10,color:"#8d6527"}}>上海-济州-福冈-长崎-上海5晚6日游</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.gotorihang.bind(this)}>
                                <View style={styles.slide2}>
                                    <Image style={styles.image}
                                           resizeMode="stretch"
                                           source={{uri: "https://www.weilv100.com"+this.state.list[0].src}}
                                    />
                                    <View style={styles.slide11}>
                                        <Text style={{fontSize:10,color:"#8d6527"}}>上海-济州-福冈-长崎-上海5晚6日游</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.gotorihang.bind(this)}>
                                <View style={styles.slide2}>
                                    <Image style={styles.image}
                                           resizeMode="stretch"
                                           source={{uri: "https://www.weilv100.com"+this.state.list[0].src}}
                                    />
                                    <View style={styles.slide11}>
                                        <Text style={{fontSize:10,color:"#8d6527"}}>上海-济州-福冈-长崎-上海5晚6日游</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.gotorihang.bind(this)}>
                                <View style={styles.slide2}>
                                    <Image style={styles.image}
                                           resizeMode="stretch"
                                           source={{uri: "https://www.weilv100.com"+this.state.list[0].src}}
                                    />
                                    <View style={styles.slide11}>
                                        <Text style={{fontSize:10,color:"#8d6527"}}>上海-济州-福冈-长崎-上海5晚6日游</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.gotorihang.bind(this)}>
                                <View style={styles.slide2}>
                                    <Image style={styles.image}
                                           resizeMode="stretch"
                                           source={{uri: "https://www.weilv100.com"+this.state.list[0].src}}
                                    />
                                    <View style={styles.slide11}>
                                        <Text style={{fontSize:10,color:"#8d6527"}}>上海-济州-福冈-长崎-上海5晚6日游</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Swiper>
                    </View>
                    {
                        this.state.isUp?
                            <View style={styles.sousuo_w}>
                                <View style={styles.sousuo}>
                                    <Image
                                        source={require("./../../tupian/ship/搜索.png")}
                                        style={{width:17,height:17}}
                                    />
                                    <TextInput
                                        style={styles.shurukuang}
                                        placeholder="请输入游轮目的地/关键字"
                                        onChangeText={(text) => this.setState({text})}
                                        Value={this.state.text}
                                    />
                                </View>
                            </View>
                        :
                            <View style={styles.sousuo_w}>
                                <View style={styles.sousuo}>
                                    <Image
                                        source={require("./../../tupian/ship/搜索.png")}
                                        style={{width:17,height:17}}
                                    />
                                    <TextInput
                                        style={styles.shurukuang}
                                        placeholder="请输入目的地/关键字"
                                        onChangeText={(text) => this.setState({text})}
                                        Value={this.state.text}
                                    />
                                </View>
                            </View>

                    }


                    <View style={styles.country}>
                        <TouchableOpacity onPress={this.gotorihanhangxian.bind(this)}>
                            <View style={styles.country_1}>
                                <View >
                                    <Image
                                        source={require("./../../tupian/ship/xiaotubiao.png")}
                                        style={{width:40,height:35}}
                                    />
                                </View>
                                <View style={{marginTop:13}}>
                                    <Text style={{fontSize:12,color:"#414141"}}>日韩</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gotorihanhangxian.bind(this)}>
                            <View style={styles.country_1}>
                                <View >
                                    <Image
                                        source={require("./../../tupian/ship/xiaotubiao.png")}
                                        style={{width:40,height:35}}
                                    />
                                </View>
                                <View style={{marginTop:13}}>
                                    <Text style={{fontSize:12,color:"#414141"}}>日本</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gotorihanhangxian.bind(this)}>
                            <View style={styles.country_1}>
                                <View >
                                    <Image
                                        source={require("./../../tupian/ship/xiaotubiao.png")}
                                        style={{width:40,height:35}}
                                    />
                                </View>
                                <View style={{marginTop:13}}>
                                    <Text style={{fontSize:12,color:"#414141"}}>韩国</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gotorihanhangxian.bind(this)}>
                            <View style={styles.country_1}>
                                <View>
                                    <View >
                                        <Image
                                            source={require("./../../tupian/ship/xiaotubiao.png")}
                                            style={{width:40,height:35}}
                                        />
                                    </View>
                                    <View style={{marginTop:13}}>
                                        <Text style={{fontSize:12,color:"#414141"}}>地中海</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.yltype_f}>
                        <View style={styles.yltype_f1}>
                            <Image
                                source={require("./../../tupian/ship/邮轮品牌.png")}
                                style={{width:94,height:25,marginLeft:10,marginTop:6}}
                            />
                        </View>
                        <View style={styles.hebei}>
                            <View style={styles.yltype}>
                                <Image
                                    source={require("./../../tupian/ship/公主邮轮.jpg")}
                                    style={styles.yltype}
                                />
                            </View>
                            <View style={styles.yltype}>
                                <Image
                                    source={require("./../../tupian/ship/公主邮轮.jpg")}
                                    style={styles.yltype}
                                />
                            </View>
                            <View style={styles.yltype}>
                                <Image
                                    source={require("./../../tupian/ship/公主邮轮.jpg")}
                                    style={styles.yltype}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{height:40,width:width,flex:1,flexDirection:"row"}}>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <Image
                                source={require("./../../tupian/ship/热推产品.png")}
                                style={{width:30,height:30,marginLeft:10,marginTop:6}}
                            />
                            <Text style={{marginTop:15,marginLeft:10}}>热推产品</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"flex-end"}}>
                            <Text style={{marginTop:15,fontSize:13,color:"#6f7378"}}>更多</Text>
                            <Image
                                source={require("./../../tupian/ship/更多.png")}
                                style={{width:11,height:11,marginLeft:3,marginTop:16,marginRight:10}}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.container}>
                            <View style={styles.page_ff}>
                                <View style={styles.page_f}>
                                    <View style={styles.page}>
                                        <Image
                                            source={require("./../../tupian/ship/22.png")}
                                            style={styles.page}
                                        />

                                    </View>
                                    <View style={styles.page1}>
                                        <View style={styles.page11}>
                                            <Image
                                                source={require("./../../tupian/ship/港口-列表.png")}
                                                style={{width:12,height:12}}
                                            />
                                            <Text style={{marginRight:30,color:"white"}}>上海出发</Text>
                                            <Image
                                                source={require("./../../tupian/ship/报名日期-列表.png")}
                                                style={{width:13,height:13,marginRight:5}}
                                            />
                                            <Text style={{color:"white"}}>请提前10天报名</Text>
                                        </View>
                                        <Image
                                            source={require("./../../tupian/ship/cruise_detail_follow.png")}
                                            style={{width:21,height:20,marginRight:10}}
                                        />



                                    </View>
                                    <View style={styles.page2}>
                                        <View style={styles.page3}>
                                            <Text style={{fontSize:14,color:"#2f2f2f"}}>＜2015年6月7日歌诗达大西洋号   上海-济州-福冈-上海
                                                4晚5天></Text>
                                        </View>
                                       <View>
                                           <View style={styles.page4}>
                                               <Image
                                                   source={require("./../../tupian/ship/邮轮12-副本.png")}
                                                   style={{width:15,height:15}}
                                               />
                                               <Text style={{fontSize:11,color:"#a0a0a0",marginLeft:8}}>歌诗达邮轮-大西洋号</Text>
                                               <View style={{marginTop:-5}}>
                                                   <Text style={{fontSize:16,color:"#ff5b26",marginLeft:140}}>￥19860</Text>
                                               </View>
                                               <Text style={{fontSize:13,color:"#a0a0a0"}}>起</Text>
                                           </View>
                                       </View>
                                    </View>
                                </View>

                            </View>
                        </View>

                    </View>

                </ScrollView>


            )
        }

    }
    _renderfooter(){
        return(
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Text style={{marginTop:15,fontSize:13,color:"#6f7378"}}>查看更多</Text>
                <Image
                    source={require("./../../tupian/ship/更多.png")}
                    style={{width:11,height:11,marginLeft:3,marginTop:16,marginRight:10}}
                />
            </View>
        )
    }
    render(){
        return(
            <View style={{flex:1,position:"relative"}}>
                <Image
                    source={require("./../../tupian/ship/beijing.gif")}
                    style={{width:width,height:this.state.height,zIndex:2}}
                />
                <View style={styles.wrapper}>
                    <Image
                        source={require("./../../tupian/ship/矩形-22-副本.png")}
                        style={{width:15,height:26}}
                    />
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.hanhsu.bind(this)}
                    enableEmptySections={true}
                    renderFooter={this._renderfooter}
                />

            </View>
        )
    }

}


let styles=StyleSheet.create({
    wrapper: {
        position:"absolute",
        top:29,
        left:11,
        zIndex:1
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        position:"relative"
    },
    slide11:{
        position:"absolute",
        top:113,
        left:0,
        backgroundColor:"#fdd356",
        height:19,
        width:206,
        borderBottomRightRadius:5,
        borderTopRightRadius:2,
        flex:1,
        alignItems:"flex-end",
        justifyContent:"center",
        paddingRight:8
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
        position:"relative"
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
        position:"relative"

    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image:{
        width,
        flex:1,
        height:200,

    },
    sousuo_w:{
        position:"absolute",
        width:width,
        zIndex:1,
        top:170

    },
    sousuo:{
        borderColor: '#dee5eb',
        borderWidth: 1,
        width:width*0.933333,
        height:height*0.055472264,
        borderRadius:6,
        position:"absolute",
        top:-height*0.027736,
        left:width*0.5,
        marginLeft:-width*0.46666666,
        backgroundColor:"white",
        paddingLeft:25,
        alignItems:"center",
        flexDirection:"row",
    },
    shurukuang:{
        fontSize:12,
        width:width*0.75,
        height:height*0.0555472264,
        color:"#cacbcc",
        marginLeft:14,

    },
    country:{
        flex:1,
        justifyContent:"flex-start",
        flexDirection:"row",
        width:width,
        height:110,
    },
    country_1:{
        width:width*0.25,
        flex:1,
        alignItems:"center",
        marginTop:35
    },
    yltype_f:{
        borderTopWidth:10.5,
        borderBottomWidth:10.5,
        borderColor:"#dee5eb",

    },
    yltype_f1:{
        height:40,
    },
    hebei:{
        flex: 1,
        width:width,
        height:80,
        justifyContent:"space-between",
        flexDirection:"row",
        marginBottom:15,
        paddingLeft:10,
        paddingRight:10

    },
    yltype:{
        backgroundColor:"blue",
        width:110,
        height:80,
    },
    container:{
        flex:1,
        marginBottom:10,
    },
    page_ff:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center"
    },
    page_f:{
        width:355,
        position:"relative",
        height:239,
    },
    page:{
        width:353,
        height:165,
        borderRadius:5,
        borderColor:"transparent",
        borderWidth:1
    },
    page1:{
        height:26,
        width:355,
        backgroundColor:"rgba(0,0,0,.5)",
        position:"absolute",
        top:139,
        left:0,
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    page11:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        paddingLeft:10
    },
    page2:{
        height:70,
        width:355,
        paddingLeft:10,
        borderWidth:1,
        borderColor:"#dcdcdc",
    },
    page3:{
        marginTop:11
    },
    page4:{
        flex:1,
        height:16,
        marginTop:4,
        flexDirection:"row",

    }

});

module.exports=Menu;
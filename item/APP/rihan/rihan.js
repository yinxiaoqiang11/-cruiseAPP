/**
 * Created by lanou on 16/10/21.
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
var ScrollableTabView = require('react-native-scrollable-tab-view');
let Fenxiang=require("./fenxiang");
class Rihan extends Component{
    constructor(props){
        super(props);
        this.state = {
            text:'',
            list:[],
            numberOfLines:1,
            bb:1,
            color:"#ff9966",
            color1:"#6f7378",
            color2:"#ff9966",
            bg:"transparent"
        };

    }
    a(){
        if(this.state.numberOfLines==1){
            this.setState({
                numberOfLines:5,

            })
        }else{
            this.setState({
                numberOfLines:1,

            })
        }

    }
    b(){
        if(this.state.bb==1){
            this.setState({
                bb:5,

            })
        }else{
            this.setState({
                bb:1,

            })
        }

    }
    c(){
        if(this.state.bg=="#ff9966"){
            this.setState({
                color:"#ff9966",
                bg:"transparent",
                color2:"#ff9966",
                color1:"#6f7378",

            })
        }
    }
    d(){
        if(this.state.bg=="transparent"){
            this.setState({
                bg:"#ff9966",
                color1:"#ff9966",
                color2:"#6f7378",
                color:"transparent"
            })
        }
    }
    goback(){
        this.props.navigator.pop();
    }
    gotofenxiang(){
        this.props.navigator.push({
            component:Fenxiang
        })
    }
    render(){
        return(
            <ScrollView>
                <View style={{flex:1}}>
                    <View style={styles.container}>
                        <View style={styles.total}>
                            <View style={styles.top}>
                                <Image
                                    source={require("./../../tupian/ship/jj.png")}
                                    style={{width:width,height:200,}}
                                />
                                <View style={{position:"absolute",top:25,left:10}}>
                                    <TouchableOpacity onPress={this.goback.bind(this)}>
                                        <Image
                                            source={require("./../../tupian/lvyou/touris_detail_back.png")}
                                            style={{width:36,height:36,}}
                                        />
                                    </TouchableOpacity>

                                </View>
                                <View style={{position:"absolute",top:25,right:10}}>
                                    <TouchableOpacity onPress={this.gotofenxiang.bind(this)}>
                                        <Image
                                            source={require("./../../tupian/lvyou/you.png")}
                                            style={{width:36,height:36}}
                                        />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={styles.bottom}>
                                <View style={styles.nei}>
                                    <Image
                                        source={require("./../../tupian/ship/港口-列表.png")}
                                        style={{width:12,height:12}}
                                    />
                                    <Text style={{color:"white",fontSize:10,marginLeft:5}}>上海出发</Text>
                                </View>
                                <View>
                                    <Text style={{color:"white",fontSize:10}}>2016年4月18日</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.zong}>
                            <View style={styles.shang}>
                                <View style={{marginBottom:13}}>
                                    <Text style={{fontSize:14}}>＜2016年4月18日  歌诗达赛琳娜  上海-济州-福冈-上海
                                        4晚5天＞
                                    </Text>
                                </View>
                                <View style={styles.shop}>
                                    <View style={styles.zuo}>
                                        <Text style={{fontSize:14,color:"#ff6600"}}>微旅价:￥</Text>
                                        <View style={{marginTop:-2,height:17}}>
                                            <Text style={{fontSize:16,color:"#ff6600"}}>5690</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={styles.you}>
                                            <View style={styles.zuo1}>
                                                <Text style={{fontSize:14,color:"#fff"}}>返</Text>
                                            </View>
                                            <View style={styles.you1}>
                                                <Text style={{fontSize:11,color:"#ff6600"}}>￥115</Text>
                                                <Text style={{fontSize:11,color:"#cbcbcb"}}>起</Text>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                            </View>
                            <View style={styles.xia}>
                                <View style={{marginTop:10,marginBottom:10}}>
                                    <Text style={{fontSize:10,color:"#868686"}}>编号: b827437968136701</Text>
                                </View>
                                <View style={styles.ending}>
                                    <View style={{width:280}}>
                                        <Text numberOfLines={this.state.numberOfLines} style={{fontSize:10,color:"#868686"}}>本产品由新华社旅行社提供服务,经营许可证号:L-HE本产品由新华社旅行社提供服务,经营许可证号:L-HE本产品由新华社旅行社提供服务,经营许可证号:L-HE</Text>

                                    </View>
                                    <TouchableOpacity onPress={this.a.bind(this)}>
                                        <Image
                                            source={require("./../../tupian/ship/矩形-36.png")}
                                            style={{width:10,height:10,backgroundColor:"#fff"}}

                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <ScrollableTabView
                                initialPage={1}
                                tabBarActiveTextColor="red"
                                tabBarUnderlineStyle={{backgroundColor: '#ff9966'}}
                                tabBarBackgroundColor='#FFFFFF'
                                scrollWithoutAnimation={true}
                                style={{height:40}}
                            >
                                <View tabLabel='舱房信息'>
                                    <Text>1</Text>
                                </View>
                                <View tabLabel='行程介绍'>
                                    <Text>2</Text>
                                </View>

                            </ScrollableTabView>
                        </View>
                        <View style={styles.chanpintese}>
                            <View style={styles.tese}>
                                <Image
                                    source={require("./../../tupian/ship/cruise_detail_product_tese.png")}
                                    style={{width:20,height:20}}
                                />
                                <Text style={{fontSize:14,marginLeft:5}}>产品特色</Text>
                            </View>
                            <View style={styles.tese_center}>
                                <Text style={{fontSize:11,color:"#868686"}}>1.采用星际航空公司豪华版客机往返,安全舒适。</Text>
                            </View>
                            <View style={styles.tese_bottom}>
                                <View style={{width:292}}>
                                    <Text numberOfLines={this.state.bb} style={{fontSize:11,color:"#868686"}}>2.一次游玩波罗的海沿岸最佳主要名城,美景醉人一次游玩波罗的海沿岸最佳主要名城,美景醉人一次游玩波罗的海沿岸最佳主要名城,美景醉人</Text>
                                </View>

                                <View >
                                    <TouchableOpacity onPress={this.b.bind(this)}>
                                        <Image
                                            source={require("./../../tupian/ship/矩形-36.png")}
                                            style={{width:10,height:10}}
                                        />
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.xinxi}>
                                <View style={styles.xinxi_z}>
                                    <View style={styles.xinxi_z_1}>
                                        <Image
                                            source={require("./../../tupian/ship/nb.png")}
                                            style={{width:75,height:75}}
                                        />
                                    </View>
                                    <View>
                                        <View style={styles.xinxi_z_2}>
                                            <View style={styles.xinxi_z_21}>
                                                <Text style={{fontSize:14}}>标注内舱3人房</Text>
                                            </View>
                                            <View style={styles.xinxi_z_22}>
                                                <Text style={{fontSize:11,color:"#9b9da0"}}>15cm²、住3人、无窗</Text>
                                            </View>
                                            <View>
                                                <View style={styles.xinxi_z_23}>
                                                    <View style={{marginTop:-5}}>
                                                        <Text style={{fontSize:16,color:"#ff6600"}}>￥1860</Text>
                                                    </View>
                                                    <Text style={{fontSize:11,color:"#9b9da0"}}>/人起</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.xinxi_y}>
                                        <View style={styles.xinxi_y1}>
                                            <Text style={{fontSize:13,color:"#60b5f6"}}>查看全部</Text>
                                        </View>
                                        <View style={styles.xinxi_y2}>
                                            <Text style={{fontSize:11,color:"#959595"}}>内舱房</Text>
                                        </View>
                                        <View style={styles.xinxi_y3}>
                                            <Text style={{fontSize:11,color:"#959595"}}>(共2种)</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.xinxi}>
                                <View style={styles.xinxi_z}>
                                    <View style={styles.xinxi_z_1}>
                                        <Image
                                            source={require("./../../tupian/ship/nb.png")}
                                            style={{width:75,height:75}}
                                        />
                                    </View>
                                    <View>
                                        <View style={styles.xinxi_z_2}>
                                            <View style={styles.xinxi_z_21}>
                                                <Text style={{fontSize:14}}>标注内舱3人房</Text>
                                            </View>
                                            <View style={styles.xinxi_z_22}>
                                                <Text style={{fontSize:11,color:"#9b9da0"}}>15cm²、住3人、无窗</Text>
                                            </View>
                                            <View>
                                                <View style={styles.xinxi_z_23}>
                                                    <View style={{marginTop:-5}}>
                                                        <Text style={{fontSize:16,color:"#ff6600"}}>￥1860</Text>
                                                    </View>
                                                    <Text style={{fontSize:11,color:"#9b9da0"}}>/人起</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.xinxi_y}>
                                        <View style={styles.xinxi_y1}>
                                            <Text style={{fontSize:13,color:"#60b5f6"}}>查看全部</Text>
                                        </View>
                                        <View style={styles.xinxi_y2}>
                                            <Text style={{fontSize:11,color:"#959595"}}>内舱房</Text>
                                        </View>
                                        <View style={styles.xinxi_y3}>
                                            <Text style={{fontSize:11,color:"#959595"}}>(共2种)</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.xinxi}>
                                <View style={styles.xinxi_z}>
                                    <View style={styles.xinxi_z_1}>
                                        <Image
                                            source={require("./../../tupian/ship/nb.png")}
                                            style={{width:75,height:75}}
                                        />
                                    </View>
                                    <View>
                                        <View style={styles.xinxi_z_2}>
                                            <View style={styles.xinxi_z_21}>
                                                <Text style={{fontSize:14}}>标注内舱3人房</Text>
                                            </View>
                                            <View style={styles.xinxi_z_22}>
                                                <Text style={{fontSize:11,color:"#9b9da0"}}>15cm²、住3人、无窗</Text>
                                            </View>
                                            <View>
                                                <View style={styles.xinxi_z_23}>
                                                    <View style={{marginTop:-5}}>
                                                        <Text style={{fontSize:16,color:"#ff6600"}}>￥1860</Text>
                                                    </View>
                                                    <Text style={{fontSize:11,color:"#9b9da0"}}>/人起</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.xinxi_y}>
                                        <View style={styles.xinxi_y1}>
                                            <Text style={{fontSize:13,color:"#60b5f6"}}>查看全部</Text>
                                        </View>
                                        <View style={styles.xinxi_y2}>
                                            <Text style={{fontSize:11,color:"#959595"}}>内舱房</Text>
                                        </View>
                                        <View style={styles.xinxi_y3}>
                                            <Text style={{fontSize:11,color:"#959595"}}>(共2种)</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={style.cc}>
                                <View style={style.c}>
                                    <View style={style.cc1}>
                                        <Image
                                            source={require("./../../tupian/ship/cruise_detail_yuding.png")}
                                            style={{width:20,height:20}}
                                        />
                                        <Text style={{marginLeft:19}}>预订须知</Text>
                                    </View>
                                    <View style={style.cc1}>
                                        <Image
                                            source={require("./../../tupian/ship/cruise_detail_fee.png")}
                                            style={{width:20,height:20}}
                                        />
                                        <Text style={{marginLeft:19}}>费用说明</Text>
                                    </View>

                                </View>
                                <View style={style.c}>
                                    <View style={style.cc1}>
                                        <Image
                                            source={require("./../../tupian/ship/cruise_detail_tuigai.png")}
                                            style={{width:20,height:20}}
                                        />
                                        <Text style={{marginLeft:19}}>退改规则</Text>
                                    </View>
                                    <View style={style.cc1}>
                                        <Image
                                            source={require("./../../tupian/ship/cruise_detail_qianzheng.png")}
                                            style={{width:20,height:20}}
                                        />
                                        <Text style={{marginLeft:19}}>签证说明</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={style.koo}>
                                <View style={style.ko}>
                                    <View style={style.shoucang}>
                                        <Image
                                            source={require("./../../tupian/ship/cruise_detail_followed.png")}
                                            style={{width:20,height:20}}
                                        />
                                        <Text style={{color:"#ff9966"}}>已收藏</Text>
                                    </View>
                                    <View style={style.dianhua}>
                                        <Image
                                            source={require("./../../tupian/ship/cruise_detail_phone.png")}
                                            style={{width:20,height:20}}
                                        />
                                        <Text style={{color:"#abb4bc"}}>电话咨询</Text>
                                    </View>
                                    <View style={style.yuding}>
                                        <Text style={{color:"#fff"}}>
                                            立即预定
                                        </Text>
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
const style=StyleSheet.create({
    cc:{
        flex:1,
        height:90,
        borderTopColor:"#dee5eb",
        borderTopWidth:10,
        justifyContent:"space-between",
        flexDirection:"row",
    },
    c:{
        flex:1,
        height:40
    },
    cc1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        borderColor: "#e5e5e5",
        borderWidth: 1,
        flexDirection:"row",
    },
    ko:{
        flex:1,
        flexDirection:"row",
        height:50,
        borderColor: "#e5e5e5",
        borderWidth: 1,
    },
    koo:{
        flex:1,
        height:50,
    },
    shoucang:{
        height:50,
        width:62,
        alignItems:"center",
        justifyContent: "center",
        borderRightColor:"#e5e5e5",
        borderRightWidth:1
    },
    dianhua:{
        height:50,
        width:62,
        alignItems:"center",
        justifyContent: "center",
    },
    yuding:{
        height:49,
        width:250,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor:"#ff9966"
    }

});

const styles=StyleSheet.create({
   container:{
       flex:1,
   },
    total:{
       position:"relative"
    },
    top:{
        width:width,
        height:200,
        backgroundColor:"red",
        position:"relative"

    },
    bottom:{
        position:"absolute",
        left:0,
        top:180,
        width:width,
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        height:20,
        backgroundColor:"rgba(0,0,0,.5)",
        flexDirection:"row",
        paddingLeft:10,
        paddingRight:10,
    },
    nei:{
        flex:1,
        justifyContent:"flex-start",
        flexDirection:"row"
    },
    zong:{
        width:width,
        paddingLeft:10,
        paddingRight:10,
        borderBottomColor:"#dee5eb",
        borderBottomWidth:10
    },
    shang:{
        borderBottomWidth:1,
        borderBottomColor:"#e5e5e5",
        paddingTop:10
    },
    shop:{
        flex:1,
        justifyContent:"space-around",
        flexDirection:"row",
        marginBottom:10
    },
    zuo:{
        flex:1,
        justifyContent:"flex-start",
        flexDirection:"row"
    },
    you:{
        width:71,
        height:18,
        borderRadius:9,
        borderWidth:1,
        borderColor:"#6eb5eb",
        position:"relative"
    },
    zuo1:{
        width:24,
        height:17,
        backgroundColor:"#6eb5eb",
        borderBottomLeftRadius:9,
        borderTopLeftRadius:9,
        borderColor:"#6eb5eb",
        borderWidth:1,
        position:"absolute",
        top:0,
        left:0,
        zIndex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    you1:{
        position:"absolute",
        right:0,
        top:0,
        width:47,
        height:16,
        flex:1,
        flexDirection:"row",
        borderBottomRightRadius:9,
        borderTopRightRadius:9,
        justifyContent:"center",
        alignItems:"center"
    },
    ending:{
        justifyContent:"space-between",
        flexDirection:"row",
        marginBottom:10
    },
    qiehuan:{
        flex:1,
        justifyContent:'space-around',
        flexDirection:'row',
        height:40,
        borderBottomColor:"#e5e5e5",
        borderBottomWidth:1,
        width:width
    },
    ql_lz:{

    },
    ql_lr:{

    },
    chanpintese:{
        paddingLeft:10,
        paddingTop:10,
        paddingRight:10,
        borderBottomColor:"#dee5eb",
        borderBottomWidth:10,
    },
    tese:{
        flex:1,
        flexDirection:"row",
        marginBottom:10,
        alignItems:"center"
    },
    tese_center:{
        flex:1,
        marginBottom:5,
        paddingLeft:15
    },
    tese_bottom:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10,
        paddingLeft:15
    },
    xinxi:{
        flex:1,
        justifyContent:"space-between",
        flexDirection:"row",
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        borderBottomColor:"#e5e5e5",
        borderBottomWidth:1,
    },
    xinxi_z:{
        flex:1,
        justifyContent:"flex-start",
        flexDirection:"row",
        height:84

    },
    xinxi_z_1:{
        width:75,
        height:75,
        backgroundColor:"red"

    },
    xinxi_z_2:{
        marginLeft:10,
        height:84

    },
    xinxi_z_21:{
        marginBottom:10,
    },
    xinxi_z_22:{
        marginBottom:19,
    },
    xinxi_z_23:{
        flex:1,
        flexDirection:"row",
    },
    xinxi_y:{
        width:92,
        height:74,
        borderLeftWidth:1,
        borderLeftColor:"#e5e5e5",
        paddingTop:16,
    },
    xinxi_y1:{
        flex:2,
        justifyContent:"center",
        flexDirection:"row"
    },
    xinxi_y2:{
        flex:1,
        justifyContent:"center",
        flexDirection:"row"
    },
    xinxi_y3:{
        flex:2,
        justifyContent:"center",
        flexDirection:"row"
    }

});




module.exports=Rihan;
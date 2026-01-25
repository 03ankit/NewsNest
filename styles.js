import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1c2e',
  
  },
  header:{
    flex:0.15,
    marginTop:hp("10%")
  },

  backButton:{
    width:hp("4%"),
    height:hp("4%"),
    borderWidth:1,
    borderColor:"white",
    marginLeft:hp("2.5%"),
    marginTop:hp("5%"),
    borderRadius:hp("3%"),
    alignItems:"center",

  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft:hp("2.5%"),
    color:"white",
  },
  subtitle:{
    color:"grey",
    marginLeft:hp("2.5")
  },

  card: {
    flex: 0.85,
    backgroundColor: "#fff",
    borderTopLeftRadius: hp("4%"),
    borderTopRightRadius: hp("4%"),
    
  },
  
  // toggle:{
   
  //   flexDirection: "row",
  //   height: hp("6%"),
  //   backgroundColor: "#e1e5eb",
  //   borderRadius: hp("3%"),
  //   marginLeft: hp("5%"),
  //   marginRight: hp("5%"),
  //   marginTop: hp("5%"),
  // },
  // togglebtnLogin:{
  //   flex:0.5,
  //   borderRadius: hp("3%"),
  //   margin: hp("0.5%"),
  //   justifyContent: "center", 
  //   alignItems: "center",
  //   backgroundColor: "#fff",
  // },
  // togglebtnRegister:{
  //   flex:0.5,
  //   borderRadius: hp("3%"),
  //   margin: hp("0.5%"),
  //   justifyContent: "center", 
  //   alignItems: "center",
  //   backgroundColor: "#fff",
  // },
  // activeToggle:{      
  //   flex:0.5,
  //   justifyContent: "center", 
  //   alignItems: "center",   
  //   borderRadius: hp("3%"),
  // },
   row: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: hp("3%"),
  },

  text:{
    color:"#2d64f5"
  },

checkboxRow: {
  flexDirection: "row",
  alignItems: "center",
},
checkbox: {
  width: 18,
  height: 18,
  borderWidth: 1,
  borderColor: "#999",
  marginRight: 8,
},
  
  orRow: {
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    
  },
  orLeft: {
    flex:0.3,
    backgroundColor: "black",
    height:hp("0.1%"),
   
    
  },
  orRight: {
    flex:0.3,
    backgroundColor: "black",
    height:hp("0.1%"),
   
  },
  orText: {
    textAlign: "center",
    margin: hp("0.1%"),
    color: "#0c0c0cff",
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: hp("2%"),
    
  },

  socialBtn: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e1e5eb",
    padding: hp("1.8%"),
    borderRadius: hp("3%"),
    margin: hp("1%"),
    alignItems: "center",
    width:hp("20%"),
    justifyContent: "center", 
  },
  


});

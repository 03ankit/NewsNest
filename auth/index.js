// import APIServices from "../../services/APIServices"
// import { 
//     signInWithMobileNoRequest, 
//     signInWithMobileNoSuccess, 
//     signInWithMobileNoFailure, 
//     verifyOTPRequest, 
//     verifyOTPSuccess, 
//     verifyOTPFailure 
// } from "./action"
// import strings from "../../localization/localization"



const twilioVerificationSID = "VA9c9ef4c2c8ed9d303f420b7a65fb411e"
const twilioAuthTokenBase64 = "QUM1ZjRiYWU1MDViZTFiNzY2YjRiZThiMjQ1YTYwYjQwMToyZWI3YzE3MDFhMjgxYzUzZTBlNDJhNmIwMjI1NTFkZA=="

export function sendVerificationCode(mobileNo, callback) {
    // return (dispatch) => {
        // dispatch(signInWithMobileNoRequest(mobileNo))

        // // // Temp - Skip Verification Code Sending Process
        // // dispatch(signInWithMobileNoSuccess());
        // // callback && callback(true, null);
  
        fetch(
            `https://verify.twilio.com/v2/Services/${twilioVerificationSID}/Verifications`,
            { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', 
                    Authorization: `Basic ${twilioAuthTokenBase64}`,
                },
                body: `To=${encodeURIComponent(mobileNo)}&Channel=sms`,
            }
        ).then(response => {
            response.json().then(jsonData => {
                if (response.ok) {
                    console.log('Twilio Response -', response)
                    // dispatch(signInWithMobileNoSuccess());
                    callback && callback(true, null);
                } 
                else {
                    const error = { message: jsonData.message };
                    console.log('Twilio error -', error.message)
                    // dispatch(signInWithMobileNoFailure()); 
                    callback && callback(false, error.message); 
                }
            });
        })
        .catch(error => { 
            console.log('Twilio error --',error);
            // dispatch(signInWithMobileNoFailure());
            callback && callback(false, error.message);
        });
    }




export function verifyingVerificationCode(mobileDetails, callback) {
    const { mobileNo, otp } = mobileDetails;
    // return (dispatch) => {
    //     dispatch(verifyOTPRequest())

    //     // Temp - Skip Code Verification Process
    //     dispatch(verifyOTPSuccess());
    //     callback && callback(true, null);

    //     const mobileNo = mobileDetails.mobileNo;
    //     const OTP = mobileDetails.otp

        console.log('mobileDetails.mobileNo==',mobileDetails.mobileNo)
  
        fetch(
            `https://verify.twilio.com/v2/Services/${twilioVerificationSID}/VerificationCheck`,
            { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', 
                    Authorization: `Basic ${twilioAuthTokenBase64}`,
                },
                body: `To=${encodeURIComponent(mobileNo)}&Code=${encodeURIComponent(otp)}`,
            }
        ).then(response => {
            response.json().then(jsonData => {
                if (jsonData.valid) {
                    console.log('Twilio OTP Verification Response -', jsonData)
                    // dispatch(verifyOTPSuccess());
                    callback && callback(true, null);
                } 
                else {
                    console.log('Twilio Verification error -', response)
                    console.log("The Verification Code You Entered Is Invalid. Please Check and Try Again.")
                    // const error = { message: strings.invaildCode };
                    // dispatch(verifyOTPFailure()); 
                     callback && callback(false, {message: "Invalid OTP. Please check and try again."
            });
                }   
            });
        })
        .catch(error => { 
            console.log('Twilio Verification error --',error);
            // dispatch(verifyOTPFailure());
            callback && callback(false, error);
        });
    }


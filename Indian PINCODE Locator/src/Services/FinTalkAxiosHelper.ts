import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class FinTalkAxiosHelper {
    private asiosInstance: AxiosInstance;

    constructor() {
        this.asiosInstance = axios.create({
            //baseURL: "http://localhost:62033"
            baseURL: "http://www.becomefamous.in" 
        })
    }

    getBasicallPoInformation(FeedbackInfo: any) {
        return new Promise<any>((resolve, reject) => {
            const config: AxiosRequestConfig = {
                headers: { contentType: "application/json" }
            };
            this.asiosInstance.post("/api/Pos/GetBasicPoInformation", FeedbackInfo, config)
                .then(responseObj => {
                    //console.log("updpateAppReview :" + responseObj.data)
                    resolve(responseObj);
                }).catch(err => {
                    reject(err);
                });
        });
    }


    getBasicPoInformation() {
        return new Promise<any>((resolve, reject) => {
            this.asiosInstance.get("/api/Pos/GetBasicPoInformation")
                .then(responseObj => {
                    //console.log("getGuidPasswordAppReview" + responseObj.data)
                    resolve(responseObj);
                }).catch(err => {
                    reject(err);
                });
        });
    }




    getPostOfficeInfoPinCode(pinCode: string) {
        return new Promise<any>((resolve, reject) => {
            this.asiosInstance.get(`api/POs/GetPinInfo?pin=${pinCode}`)
                .then(responseObj => {
                    //console.log("getGuidPasswordAppReview" + responseObj.data)
                    resolve(responseObj);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    getPostOfficeInfoByInupts(statename: string, distName: string, cityName: string) {
        return new Promise<any>((resolve, reject) => {
            this.asiosInstance.get(`api/POs/GetPinInfoByInputs?stName=${encodeURIComponent(statename)}&distName=${encodeURIComponent(distName)}&CTName=${encodeURIComponent(cityName)}`)
                .then(responseObj => {
                    //console.log("getGuidPasswordAppReview" + responseObj.data)
                    resolve(responseObj);
                }).catch(err => {
                    reject(err);
                });
        });
    }


    GetStatesNames() {
        return new Promise<any>((resolve, reject) => {
            this.asiosInstance.get(`api/POs/GetStatesNames`)
                .then(responseObj => {
                    //console.log("getGuidPasswordAppReview" + responseObj.data)
                    resolve(responseObj);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    getGetDisName(statename: string) {
        return new Promise<any>((resolve, reject) => {
            this.asiosInstance.get(`api/POs/GetDisName?stName=${encodeURIComponent(statename)}`)
                .then(responseObj => {
                    //console.log("getGuidPasswordAppReview" + responseObj.data)
                    resolve(responseObj);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    getGetCityName(district: string) {
        return new Promise<any>((resolve, reject) => {
            this.asiosInstance.get(`api/POs/GetCityName?distName=${district}`)
                .then(responseObj => {
                    //console.log("getGuidPasswordAppReview" + responseObj.data)
                    resolve(responseObj);
                }).catch(err => {
                    reject(err);
                });
        });
    }
}


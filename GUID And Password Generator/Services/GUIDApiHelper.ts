import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class GUIDApiHelper {
    private asiosInstance: AxiosInstance;

    constructor() {
        this.asiosInstance = axios.create({
           // baseURL: "http://localhost:62033" 
            baseURL: "http://www.becomefamous.in" 
        })
    }

    updpateAppReview(UserActionInfo: any) {
        return new Promise<any>((resolve, reject) => {
            const config: AxiosRequestConfig = {
                headers: { contentType: "application/json" }
            };
            this.asiosInstance.post("/api/guids/InsertGUIDReview", UserActionInfo, config)
                .then(responseObj => {
                    //console.log("updpateAppReview :" + responseObj.data)
                    resolve(responseObj);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    updpateFeedbackReview(FeedbackInfo: any) {
        return new Promise<any>((resolve, reject) => {
            const config: AxiosRequestConfig = {
                headers: { contentType: "application/json" }
            };
            this.asiosInstance.post("/api/guids/SetFeedbackReview", FeedbackInfo, config)
                .then(responseObj => {
                    //console.log("updpateAppReview :" + responseObj.data)
                    resolve(responseObj);
                }).catch(err => {
                    reject(err);
                });
        });
    }


    getGuidPasswordAppReview() {
        return new Promise<any>((resolve, reject) => {
            this.asiosInstance.get("/api/guids/GetAllReview")
                .then(responseObj => {
                    //console.log("getGuidPasswordAppReview" + responseObj.data)
                    resolve(responseObj);
                }).catch(err => {
                    reject(err);
                });
        });
    }
}


import axios from "axios"


axios.defaults.timeout = 100000;
axios.defaults.baseURL = "/backend";

// /**
//  * http request 拦截器
//  */
// axios.interceptors.request.use(
//     (config) => {
//         config.data = JSON.stringify(config.data);
//         config.headers = {
//             "Content-Type": "application/json",
//         };
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// /**
//  * http response 拦截器
//  */
// axios.interceptors.response.use(
//     (response) => {
//         if (response.data.errCode === 2) {
//             console.log("过期");
//         }
//         return response;
//     },
//     (error) => {
//         console.log("请求出错：", error);
//     }
// );

/**
 * get
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
        }).then((response) => {
            landing(url, params, response.data);
            resolve(response.data);
        })
            .catch((error) => {
                reject(error);
            });
    });
}

/**
 * post
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {"Content-Type": "application/json; charset=UTF-8"}
        }).then(
            (err) => {
                reject(err);
            }
        );
    });
}

/**
 * patch
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                msag(err);
                reject(err);
            }
        );
    });
}

/**
 * put
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                msag(err);
                reject(err);
            }
        );
    });
}


export default function (fetch, url, param) {
    // let _data = "";
    return new Promise((resolve, reject) => {
        switch (fetch) {
            case "get":
                console.log("begin a get request,and url:", url);
                get(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request GET failed.", error.status);
                        msag(error.status);
                        reject(error);
                    });
                break;
            case "post":
                post(url, param).catch(function (resultCode) {
                        msag(resultCode.data.resultCode);
                        console.log(resultCode.data.resultCode);
                    });
                break;
            default:
                break;
        }
    });
}

//failure prompt
function msag(err) {
    if (err && err.resultCode) {
        switch (err.resultCode) {
            case 400:
                alert(err.response.data.error.details);
                break;
            case 401:
                alert("Unauthorized, please log in");
                break;

            case 403:
                alert("Access denied");
                break;

            case 404:
                alert("Request address error");
                break;

            case 408:
                alert("Request timed out");
                break;

            case 500:
                alert("Internal server error");
                break;

            case 501:
                alert("Service not implemented");
                break;

            case 502:
                alert("Gateway error");
                break;

            case 503:
                alert("Service is not available");
                break;

            case 504:
                alert("Gateway timeout");
                break;

            case 505:
                alert("HTTP version not supported");
                break;
            default:
        }
    }
}

/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
function landing(url, params, data) {
    if (data.code === -1) {
    }
}

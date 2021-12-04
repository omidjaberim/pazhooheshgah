export const getToken = ()=>{
    const accessToken = localStorage.getItem("accessToken");
    if(accessToken)
        return  accessToken;
    else
        return false;
}
export const setToken = (token)=>{
    return localStorage.setItem("accessToken",token)

}
export const getRefreshToken = ()=>{
    const refreshToken = localStorage.getItem("refreshToken");
    if(refreshToken)
        return  refreshToken;
    else
        return false;
}
export const setRefreshToken = (refreshToken)=>{
    return localStorage.setItem("refreshToken",refreshToken)
}
export const removeTokens = ()=>{ //// remove both tokens
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}
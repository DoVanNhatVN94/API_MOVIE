import axios from 'axios'
import { urlChiTietPhim } from '../../../API/API'
import { TOKEN_MOVIE } from '../../../util/setting'
import { layBanner, layChiTietPhim } from '../Type'

export const LayDanhSachBanner=(props)=>{
    return async(dispatch2)=>{
        const promise = await axios({
            method:"get",
            url:"https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
            headers:{
                "TokenCybersoft":TOKEN_MOVIE
            }
        })
       await  promise.then((result)=>{
            console.log(result.data.content);
            dispatch2({
                type:layBanner,
                DS:result.data.content
            })
        })
        await promise.catch((error)=>{
            console.log(error);
        })

    }
}



export const LayChiTietPhim =(maPhim)=>{
    return(dispatch2)=>{
        const promise =axios({
            method:'get',
            url:`${urlChiTietPhim}${maPhim}`,
            headers:{
                TokenCybersoft :TOKEN_MOVIE
            }
        })
        promise.then((result)=>{
            console.log(result.data.content);
            dispatch2({
                type:layChiTietPhim,
                ob:result.data.content
            })
        })
        promise.catch((error)=>{
            console.log(error);
        })
    }
}
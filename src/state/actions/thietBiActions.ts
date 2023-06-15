import { ActtionType } from "../constants/ActionsTypes"
// import {type} from "os"
//lay danh sach thiet bi
export interface ThietBi {
    maTB?:string,
    tenTB?: string,
    address?: string,
    trangThaiHD?: string,
    trangThaiKN?: string,
    dichVu?: string,
}

export interface All_ThietBi {
    type: typeof ActtionType.ALL_THIETBI,
    payload: ThietBi[] ,
}


//xem chi tiet thiet bi
export interface All_ChiTiet {
    type: typeof ActtionType.CHI_TIET_THIET_BI,
    payload: ThietBi[] ,
}

export interface ThietBiList {
    thietBiList: Array<ThietBi>,
    chiTietThietBi: any
}

export type Action = All_ThietBi | All_ChiTiet;
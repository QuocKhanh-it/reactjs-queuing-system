
import {ActtionType} from "../constants/ActionsTypes"
export interface CapSo{
    id?:string,
    tenKhachHang?:string,
    tenDichVu?:string,
    thoiGianCap?:string,
    hanSuDung?:string,
    trangThai?:string,
    nguonCap?:string,
}

export interface CapSoList{
    capSoList: Array<CapSo>
}

export interface ALL_CapSo{
    type: typeof ActtionType.ALL_CAPSO,
    payload: CapSo[],
}

export type Action = ALL_CapSo
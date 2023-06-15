import {ActtionType} from "../constants/ActionsTypes";

export interface DichVu{
    id?: number,
    moTa?: string,
    tenDichVu?: string,
    trangThaiHD?: string
}

export interface DichVuList {
    dichVuList: Array<DichVu>
}

export interface ALL_DichVu{
    type : typeof ActtionType.ALL_DICHVU,
    payload: DichVu[],
}

export type Action = ALL_DichVu
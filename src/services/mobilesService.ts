import axios, { AxiosError } from 'axios';
import { MobilesModel } from '../models/mobilesModel';


const MOBILEPHONES_URL = "http://localhost:5000/MobilePhones/";


export const getAllMobiles = async (): Promise<MobilesModel[]> => {
    try {
        const { data } = await axios.get(MOBILEPHONES_URL)
        return data
    } catch (error) {
        logError(error);
        return []
    }
}

export const deleteProduct = async (id: number): Promise<Boolean> => {
    const { status } = await axios.delete(MOBILEPHONES_URL + id);
    return status === 200
}

export const addNewProduct = async (product: MobilesModel): Promise<any[]> => {
    try {
        const { data } = await axios.post(MOBILEPHONES_URL, product)
        return data
    } catch (error) {
        logError(error);
        return []
    }
}


const logError = (error: any) => {
    const err = error as AxiosError
    console.log(err.message)
    console.log(err.name)
};
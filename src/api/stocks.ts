import { AxiosResponse } from "axios";
import api from "./api";
import { IStock } from "../types/IStock";

export const getStocks = (): Promise<AxiosResponse<IStock[]>> =>
  api.get(`stocks`);

export const addStocks = (data: IStock): Promise<AxiosResponse<IStock[]>> =>
  api.post(`stocks/add`, data);

export const deleteStocks = (id: number): Promise<AxiosResponse<IStock[]>> =>
  api.post(`stocks/delete`, { id });

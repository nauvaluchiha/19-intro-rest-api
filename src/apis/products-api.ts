import axios, { AxiosError } from "axios";
import { axiosInstance } from "@/lib/axios-instance";
import { Product } from "@/types/product";

export const productAPI = {
  getAllProducts: async () => {
    try {
      const response = await axiosInstance.get("/products");
      return response.data;
    } catch (err) {
      console.log(err);
      if (axios.isAxiosError(err)) {
        const axiosError: AxiosError = err;
        throw new Error(axiosError.stack);
      }
    }
  },
  getProductById: async (id: string) => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  addProduct: async (product: Product) => {
    try {
      const response = await axiosInstance.post("/products", product);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  editProduct: async (product: Product) => {
    try {
      const response = await axiosInstance.put(`/products/${product.id}`, product);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  deleteProduct: async (id: string) => {
    try {
      const response = await axiosInstance.delete(`/products/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
};

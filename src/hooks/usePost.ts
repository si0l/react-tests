import React from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
export type User = {
  userId: number;
  id?: number;
  title: string;
  body: string;
};

const mutationFunction = async (mutationData: User) => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    mutationData,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  );
  return data;
};

const usePost = (onSuccess: any, onError: any) => {
  return useMutation({ mutationFn: mutationFunction, onSuccess, onError });
};

export default usePost;

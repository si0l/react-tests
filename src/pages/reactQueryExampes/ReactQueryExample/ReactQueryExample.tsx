import React from "react";
import OutletWrapper from "../../../components/common/OutletWrapper/OutletWrapper";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@mui/material";
import usePost, { User } from "../../../hooks/usePost";

const postData = {
  title: "foo",
  body: "bar",
  userId: 1,
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const ReactQueryExample = () => {
  const key1 = "1";
  const { data, isLoading, isError } = useQuery({
    queryKey: ["q1", { key1 }],
    queryFn: async () => {
      await wait(2000);
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${key1}`
      );
      return data as User;
    },
  });

  const cacheQuery = useQuery({
    queryKey: ["q1", { key1 }],
    queryFn: async () => {
      await wait(3000);
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${key1}`
      );
      return data as User;
    },
  });

  const errorQuery = useQuery({
    queryKey: ["q2", { key1 }],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/erye"
      );
      return data as User;
    },
  });

  const onSuccess = () => {
    console.log("success");
  };

  const onError = () => {
    console.log("error");
  };

  const mutation = usePost(onSuccess, onError);

  const handleMutate = () => {
    mutation.mutate(postData);
  };

  return (
    <OutletWrapper>
      <p>Query is for getting data, mutation is for changing data</p>
      <p>Get query:</p>
      <p>response: {JSON.stringify(data)}</p>
      <p>isLoading: {"" + isLoading}</p>
      <p>isError: {"" + isError}</p>
      <br />
      <p>Cache query:</p>
      <p>response: {JSON.stringify(cacheQuery)}</p>
      <br />
      <p>Error query:</p>
      <p>isLoading: {"" + errorQuery.isLoading}</p>
      <p>isError: {"" + errorQuery.isError}</p>
      <p>error: {JSON.stringify(errorQuery.error)}</p>
      <br />
      <p>Mutation</p>
      <p>isLoading: {"" + mutation.isLoading}</p>
      <p>isError: {"" + mutation.isError}</p>
      <p>data: {JSON.stringify(mutation.data)}</p>
      <Button onClick={handleMutate} variant="outlined">
        Mutate
      </Button>
    </OutletWrapper>
  );
};

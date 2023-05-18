import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../types";
import { baseUrl } from "./apiUrls";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], string>({
      query: (arg) => `?${arg}`,
      transformResponse: (response: { items: User[] }) => response.items,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;

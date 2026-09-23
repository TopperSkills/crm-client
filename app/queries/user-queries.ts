import { useMutation, useQuery } from "@tanstack/react-query";

import UserService from "~/services/user-service";

import type { IUser, IUserQueryParams } from "~/types/user-type";
import { queryClient } from "./query-client";

/**
 * Query Keys
 */
export const userQueryKeys = {
  all: ["users"] as const,

  lists: () => [...userQueryKeys.all, "list"] as const,

  list: (params: IUserQueryParams) =>
    [...userQueryKeys.lists(), params] as const,

  details: () => [...userQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...userQueryKeys.details(), id] as const,
};

/**
 * =========================
 * Queries
 * =========================
 */

/**
 * Get all users
 */
export const useUsersQuery = (params: IUserQueryParams) => {
  return useQuery({
    queryKey: userQueryKeys.list(params),
    queryFn: () => UserService.getAll(params),
  });
};

/**
 * Get one user
 */
export const useUserQuery = (id: string) => {
  return useQuery({
    queryKey: userQueryKeys.detail(id),
    queryFn: () => UserService.getOne(id),
    enabled: Boolean(id),
  });
};

/**
 * =========================
 * Mutations
 * =========================
 */

/**
 * Create user
 */
export const useCreateUserMutation = () => {
  return useMutation({
    mutationFn: (user: IUser) => UserService.createUser(user),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userQueryKeys.all,
      });
    },
  });
};

/**
 * Update user
 */
export const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: ({ id, user }: { id: string; user: IUser }) =>
      UserService.updateUser(id, user),

    onSuccess: (_, variables) => {
      // Refresh user list
      queryClient.invalidateQueries({
        queryKey: userQueryKeys.lists(),
      });

      // Refresh specific user
      queryClient.invalidateQueries({
        queryKey: userQueryKeys.detail(variables.id),
      });
    },
  });
};

/**
 * Soft delete user
 */
export const useDeleteUserMutation = () => {
  return useMutation({
    mutationFn: (id: string) => UserService.deleteUser(id),

    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: userQueryKeys.lists(),
      });

      queryClient.removeQueries({
        queryKey: userQueryKeys.detail(id),
      });
    },
  });
};

/**
 * Hard delete user
 */
export const useHardDeleteUserMutation = () => {
  return useMutation({
    mutationFn: (id: string) => UserService.hardDeleteUser(id),

    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: userQueryKeys.lists(),
      });

      queryClient.removeQueries({
        queryKey: userQueryKeys.detail(id),
      });
    },
  });
};

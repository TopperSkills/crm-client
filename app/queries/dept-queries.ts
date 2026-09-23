import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import DeptService from "~/services/dept-service";
import { type IDept } from "~/types/dept-type";

/**
 * Query keys
 */
export const deptKeys = {
  all: ["depts"] as const,

  lists: () => [...deptKeys.all, "list"] as const,

  list: (params: Record<string, unknown> = {}) =>
    [...deptKeys.lists(), params] as const,

  details: () => [...deptKeys.all, "detail"] as const,

  detail: (id: string) => [...deptKeys.details(), id] as const,
};

/**
 * Get all departments
 */
export const useDepts = (params: Record<string, unknown> = {}) => {
  return useQuery({
    queryKey: deptKeys.list(params),
    queryFn: () => DeptService.getAll(params),
  });
};

/**
 * Get one department
 */
export const useDept = (id: string) => {
  return useQuery({
    queryKey: deptKeys.detail(id),
    queryFn: () => DeptService.getOne(id),
    enabled: Boolean(id),
  });
};

/**
 * Create department
 */
export const useCreateDept = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dept: IDept) => DeptService.createDept(dept),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: deptKeys.lists(),
      });
    },
  });
};

/**
 * Update department
 */
export const useUpdateDept = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, dept }: { id: string; dept: IDept }) =>
      DeptService.updateDept(id, dept),

    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: deptKeys.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: deptKeys.detail(variables.id),
      });
    },
  });
};

/**
 * Soft delete department
 */
export const useDeleteDept = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => DeptService.deleteDept(id),

    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({
        queryKey: deptKeys.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: deptKeys.detail(id),
      });
    },
  });
};

/**
 * Hard delete department
 */
export const useHardDeleteDept = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => DeptService.hardDeleteDept(id),

    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({
        queryKey: deptKeys.lists(),
      });

      queryClient.removeQueries({
        queryKey: deptKeys.detail(id),
      });
    },
  });
};

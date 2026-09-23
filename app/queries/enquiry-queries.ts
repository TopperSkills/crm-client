import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import EnquiryService from "~/services/enquiry-service";
import type { IEnquiry } from "~/types/enquiry-type";

/**
 * Query keys
 */
export const enquiryKeys = {
  all: ["enquiries"] as const,

  lists: () => [...enquiryKeys.all, "list"] as const,

  list: (params: Record<string, unknown> = {}) =>
    [...enquiryKeys.lists(), params] as const,

  details: () => [...enquiryKeys.all, "detail"] as const,

  detail: (id: string) => [...enquiryKeys.details(), id] as const,
};

/**
 * Get all enquiries
 */
export const useEnquiries = (params: Record<string, unknown> = {}) => {
  return useQuery({
    queryKey: enquiryKeys.list(params),
    queryFn: () => EnquiryService.getAll(params),
  });
};

/**
 * Get one enquiry
 */
export const useEnquiry = (id: string) => {
  return useQuery({
    queryKey: enquiryKeys.detail(id),
    queryFn: () => EnquiryService.getOne(id),
    enabled: Boolean(id),
  });
};

/**
 * Create enquiry
 */
export const useCreateEnquiry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (enquiry: IEnquiry) => EnquiryService.createEnquiry(enquiry),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: enquiryKeys.lists(),
      });
    },
  });
};

/**
 * Update enquiry
 */
export const useUpdateEnquiry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, enquiry }: { id: string; enquiry: IEnquiry }) =>
      EnquiryService.updateEnquiry(id, enquiry),

    onSuccess: (_data, variables) => {
      // Refresh enquiry lists
      queryClient.invalidateQueries({
        queryKey: enquiryKeys.lists(),
      });

      // Refresh the updated enquiry
      queryClient.invalidateQueries({
        queryKey: enquiryKeys.detail(variables.id),
      });
    },
  });
};

/**
 * Soft delete enquiry
 */
export const useDeleteEnquiry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => EnquiryService.deleteEnquiry(id),

    onSuccess: (_data, id) => {
      // Refresh enquiry lists
      queryClient.invalidateQueries({
        queryKey: enquiryKeys.lists(),
      });

      // Refresh enquiry detail
      queryClient.invalidateQueries({
        queryKey: enquiryKeys.detail(id),
      });
    },
  });
};

/**
 * Hard delete enquiry
 */
export const useHardDeleteEnquiry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => EnquiryService.hardDeleteEnquiry(id),

    onSuccess: (_data, id) => {
      // Refresh enquiry lists
      queryClient.invalidateQueries({
        queryKey: enquiryKeys.lists(),
      });

      // Remove deleted enquiry from cache
      queryClient.removeQueries({
        queryKey: enquiryKeys.detail(id),
      });
    },
  });
};

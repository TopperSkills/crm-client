export default {
  baseURL: "http://localhost:8090/api",
  api: {
    users: {
      create: "/users",
      update: "/users/",
      delete: "/users/",
      deleteHard: "/users/hard/",
      getOne: "/users/",
      getAll: "/users",
    },
    depts: {
      create: "/depts",
      update: "/depts/",
      delete: "/depts/",
      deleteHard: "/depts/hard/",
      getOne: "/depts/",
      getAll: "/depts",
    },
    enquiries: {
      create: "/enquiries",
      update: "/enquiries/",
      delete: "/enquiries/",
      deleteHard: "/enquiries/hard/",
      getOne: "/enquiries/",
      getAll: "/enquiries",
    },
  },
};

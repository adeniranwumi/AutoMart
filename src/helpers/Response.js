const Response = {
  success(data) {
    return {
      status: 200,
      data,
    };
  },

  error(reason) {
    return {
      status: 400,
      error: reason,
    };
  },
};

export default Response;

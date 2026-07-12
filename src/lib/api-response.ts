export function wrapApiResponse<T>(data: T) {
  return {
    code: 0,
    message: "query ok",
    data,
  };
}

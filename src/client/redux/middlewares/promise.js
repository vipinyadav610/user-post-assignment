const promiseMiddleware = () => {
  return next => action => {
    const { promise, type, token, ...rest } = action;

    if (!promise) return next(action);

    const SUCCESS = type + "_SUCCESS";
    const REQUEST = type + "_REQUEST";
    const FAILURE = type + "_FAILURE";
    next({ ...rest, type: REQUEST });
    return promise
      .then(response => response.json())
      .then(response => {
        next({ ...rest, response: response, type: SUCCESS });
        return true;
      })
      .catch(error => {
        next({ ...rest, error, type: FAILURE });
        console.log(error);
        return false;
      });
  };
};
export default promiseMiddleware;

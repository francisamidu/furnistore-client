const rtkQueryErrorLogger =
  ({ dispatch }: any) =>
  (next: any) =>
  (action: any) => {
    console.log(`Dispatched: ${JSON.stringify(action)}`);
    dispatch(action);
  };
export default rtkQueryErrorLogger;

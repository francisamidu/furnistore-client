const rtkQueryErrorLogger = (api: any) => (next: any) => (action: any) => {
  // console.log(`Api: ${api}`);
  // console.log(`Action: ${action}`);
  console.log(next);
  return next(action);
};
export default rtkQueryErrorLogger;

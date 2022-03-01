const rtkQueryErrorLogger = (api: any) => (next: any) => (action: any) => {
  console.log(`Api: ${api}`);
  console.log(`Action: ${action}`);
  return next(action);
};
export default rtkQueryErrorLogger;

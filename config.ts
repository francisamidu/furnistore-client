const getEnvVariable = (envVariable: string) => {
  const unvalidatedEnvVariable = process.env[envVariable];
  return unvalidatedEnvVariable || "";
};

export const config = {
  NEXT_PUBLIC_SERVER_URL: getEnvVariable("NEXT_PUBLIC_SERVER_URL"),
};

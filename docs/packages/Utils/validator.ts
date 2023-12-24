export const ParameterInvalid = <T>(types: T[]) => {
  return (value: T) => types.includes(value);
};

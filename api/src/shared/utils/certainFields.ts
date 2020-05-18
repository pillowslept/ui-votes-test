export default (obj: any, fields: string[]) => {
  const result = {};
  fields.forEach((field) => {
    result[field] = obj[field];
  })

  return result;
};

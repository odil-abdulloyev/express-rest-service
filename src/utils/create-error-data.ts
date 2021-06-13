const createErrorData = (err: Error): string => {
  const { name, message, stack } = err;
  return `${JSON.stringify({ name, message, stack })}\n`;
};

export default createErrorData;

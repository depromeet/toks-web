export const formatAccepts = (accepts: string[]) => {
  return accepts.map(accept => `.${accept}`).join(', ');
};

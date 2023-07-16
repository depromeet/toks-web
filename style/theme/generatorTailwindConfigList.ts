export const generatorTailwindConfigList = (
  arrayLength = 101,
  multiple = 4,
  unit = 'px'
) => {
  let object = {};
  const multipleArray = {
    ...Array.from(Array(arrayLength)).map(
      (_, i) => `${Number(i) * multiple}${unit}`
    ),
  };

  for (const j in multipleArray) {
    const key = multipleArray[j];
    object = { ...object, ...{ [key]: multipleArray[j] } };
  }

  return object;
};

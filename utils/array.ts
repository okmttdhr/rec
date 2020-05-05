export const updateArrayItem = <T>(index: number, value: T, array: T[]): T[] => {
  return Object.assign([], array, { [index]: value });
};

export const updateArrayItemByID = <T extends { id: string }>(array: T[], item: T) => {
  const i = array.findIndex((r) => r.id === item.id);
  if (i === -1) {
    return updateArrayItem(array.length, item, array);
  }
  return updateArrayItem(i, item, array);
};

export const deleteArrayItemByID = <T extends { id: string }>(array: T[], id: string) => {
  const i = array.findIndex((r) => r.id === id);
  if (i === -1) {
    return array;
  }
  const arr = [...array];
  arr.splice(i, 1);
  return arr;
};

export const initialItems = () => {
  const initial = new Array(29_999_999).fill(0).map((_, i) => {
    return {
      id: i,
      isSelected: i === 29_999_998,
    };
  });
  return initial;
};

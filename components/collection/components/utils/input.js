export const getInputValue = (input) => {
  if (input instanceof HTMLInputElement) {
    if (input.type === 'checkbox') {
      return input.checked;
    }
    else if (input.type === 'number') {
      return Number.parseFloat(input.value);
    }
    else {
      return input.value;
    }
  }
  if (input instanceof HTMLSelectElement) {
    return input.value;
  }
};
//# sourceMappingURL=input.js.map
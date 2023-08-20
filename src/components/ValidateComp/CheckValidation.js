export const validateObjectiveData = (field, value) => {
  switch (field) {
    case "name":
      return value.trim() !== "" && value !== null && value !== undefined;
    case "startDate":
    case "endDate":
      return value !== null && value !== undefined && value !== "";
    case "measures":
        return value.some(measure => measure.trim() !== "");
    default:
      return true; 
  }
};

export const checkEndDate = (startDateSelected, endDateSelected) => {
      return startDateSelected < endDateSelected;
};

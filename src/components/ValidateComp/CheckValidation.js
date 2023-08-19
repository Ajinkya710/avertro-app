export const validateObjectiveData = (field, value, objective) => {
    switch (field) {
      case "name":
        return value.trim() !== "";
      case "measures":
        return objective.measures.some(measure => measure.trim() !== "");
      case "startDate":
        return !value || (!objective.endDate && value <= objective.endDate);
      case "endDate":
        return !value || (!objective.startDate && value >= objective.startDate);
      default:
        return true; // No validation needed for other fields
    }
  };
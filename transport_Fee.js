function transportFee(shift) {
  if (!shift) {
    return "";
  }

  if (shift.startsWith("morning")) {
    return "R20";
  }
  else if (shift.startsWith("afternoon"))  {
    return "R10";
  }
  else if (shift.startsWith("night")) {
    return "FREE";
  }
  else {
    return "N/A";
  }
}

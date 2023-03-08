export const validNumber = new RegExp(
  '^(?:[\\/][1-9][0-9]{3}|[1-9][0-9]{2}|[1-9][0-9]|[1-9])$'
);

export const validDate = new RegExp(
  '^(0?[1-9]|1[0-2])[\\/](0?[1-9]|[1-2][0-9]|3[01])[\\/]\\d{4}$'
);

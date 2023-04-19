export const validDate = new RegExp(
  '^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])[\/]\d{4}$'
);

export const validDateUS = new RegExp(
  '^\d{4}[\/](0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])$'
)

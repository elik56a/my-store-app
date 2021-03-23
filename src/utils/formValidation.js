export const required = value => !!value || 'This Field is requried';
export const minPriceValue = value => value > 0 || 'The price must be more then 0';
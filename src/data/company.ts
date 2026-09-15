// Company and contact details supplied by the user.
export const company = {
  name: "LYOTEX LIFESCIENCES PVT LTD",
  address: "Unit No. 21, Bhoomi Raj Woods, Sector 20, Kharghar, Navi Mumbai - 410210",
  mobile: ["8104481451", "9152422452"],
  email: "Info@lyotexlife.com",
} as const;

export type Company = typeof company;

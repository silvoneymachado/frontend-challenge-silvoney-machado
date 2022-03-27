export interface Holiday {
  date: string;
  name: string;
  local_name: string;
  country_code: string;
  regions: string[];
  types: string[];
}

export interface HolidayRequest {
  country_code: string,
  year: string,
}
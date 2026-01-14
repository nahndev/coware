export type Identify = string;
export type Timestamp = number;

export type OnSuccess<T> = {
  onSuccess: (data: T) => any;
};

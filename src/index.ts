const a: number[] = [1, 2, 3];

const b: Array<string> = ["a", "b", "c"];

const c: (number | string)[] = [1, 2, 3, "a", "b"];

type Airplane = {
  flightNumber: string;
  airplaneModel: string;
  dateOfDeparture: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    [key: string]: string;
  };
};

type Airplanes = Airplane[];

const airplanes: Airplanes = [
  {
    flightNumber: "SG102",
    airplaneModel: "A380",
    dateOfDeparture: "2024/4/5",
    timeOfDeparture: "10:00 AM",
    from: "JFA",
    to: "FRA",
    seats: {
      A01: "Frank",
      A02: "John",
      A03: "Smith",
    },
  },
  {
    flightNumber: "SG103",
    airplaneModel: "A380",
    dateOfDeparture: "2024/4/5",
    timeOfDeparture: "10:00 AM",
    from: "JFA",
    to: "FRA",
    seats: {
      A01: "Frank",
      A02: "John",
      A03: "Smith",
    },
  },
  {
    flightNumber: "SG104",
    airplaneModel: "A380",
    dateOfDeparture: "2024/4/5",
    timeOfDeparture: "10:00 AM",
    from: "JFA",
    to: "FRA",
    seats: {
      A01: "Frank",
      A02: "John",
      A03: "Smith",
    },
  },
];

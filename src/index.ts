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

const airPlane: Airplane = {
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
};

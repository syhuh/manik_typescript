const addnumbers = (): void => {
  console.log(2 + 4);
};
addnumbers();

const throwNewError = (): never => {
  throw new Error("Your Program Terminated because of error");
};
throwNewError();

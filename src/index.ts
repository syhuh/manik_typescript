type Cat = {
  name: string;
  purrs: boolean;
  color: string;
};

type Dog = {
  name: string;
  barks: boolean;
  color: string;
};

type HybridAnimal = Dog & Cat;

const hybridAnimal: HybridAnimal = {
  name: "Max",
  color: "white",
  barks: true,
  purrs: false,
};

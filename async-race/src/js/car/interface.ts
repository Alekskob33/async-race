interface TCar {
  name: string;
  color: string;
  status: string;
}

export default TCar;

type targetCar = {
  id: number;
  status?: string;
};

export { targetCar };

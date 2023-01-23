import React from "react";
import { Circles } from "react-loader-spinner";

type Props = {
  message: string;
};

const Spinner: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Circles color="rgb(250 250 249)" height={50} width={50} />
      <p className="text-lg text-center p-2 mt-5">{message}</p>
    </div>
  );
};

export default Spinner;

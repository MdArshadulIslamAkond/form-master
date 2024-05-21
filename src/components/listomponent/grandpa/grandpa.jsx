import { createContext } from "react";
import Aunty from "../aunty/aunty";
import Dad from "../dad/dad";
import Uncle from "../uncle/uncle";
import "./grandpa.css";


export const AssetContext = createContext('gold');
const Grandpa = () => {
    const asset ='diamond';
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <AssetContext.Provider value={asset}>
        <section className="flex">
            <Dad asset={asset} />
            <Uncle />
            <Aunty />
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;

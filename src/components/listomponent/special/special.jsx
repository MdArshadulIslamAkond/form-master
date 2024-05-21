import { useContext } from "react";
import { AssetContext } from "../grandpa/grandpa";

// eslint-disable-next-line react/prop-types
const Special = () => {
    const asset = useContext(AssetContext);
    
    return (
        <div>
            <h2>Special</h2>
            <p>Asset: {asset}</p>
        </div>
    );
};

export default Special;
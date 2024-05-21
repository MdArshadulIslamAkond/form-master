import Brother from "../brother/brother";
import Myself from "../myself/myself";
import Sister from "../sister/sister";

// eslint-disable-next-line react/prop-types
const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself  />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Dad;
import Cousin from "../cousin/cousin";


const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Mamshad'} />
                <Cousin name={'Rubaiya'} />
            </section>
        </div>
    );
};

export default Aunty;
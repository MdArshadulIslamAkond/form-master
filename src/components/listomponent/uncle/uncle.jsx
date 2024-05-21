import Cousin from "../cousin/cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Rafsan'} />
                <Cousin name={'Sohana'} />
            </section>
        </div>
    );
};

export default Uncle;
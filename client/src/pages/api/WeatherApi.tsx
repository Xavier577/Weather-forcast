export const getStaticProps = async () => {
    const res = await fetch("/forcast", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return {
        props: { api: data },
    };
};

export const WeatherApi = ({ api }: { api?: any }) => {
    return <div>{JSON.stringify(api)}</div>;
};

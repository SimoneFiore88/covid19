import Card from "../Card/Card";

export default function Header(props) {
  console.log(props.latestData);

  const cardsData = [
    {
      label: "Deceduti",
      value: props.latestData.deceduti,
    },
    {
      label: "Guariti",
      value: props.latestData.dimessi_guariti,
    },
    {
      label: "Totale Casi",
      value: props.latestData.totale_casi,
    },
    {
      label: "Totale Positivi",
      value: props.latestData.totale_positivi,
    },
  ];

  console.log(cardsData);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cardsData.map((data) => {
          return (
            <Card key={data.label} label={data.label} value={data.value} />
          );
        })}
      </div>
    </div>
  );
}

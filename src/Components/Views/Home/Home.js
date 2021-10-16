import Header from "../../UI/Header/Header";

export default function Home(props) {
  const latestData = props.data[props.data.length - 1];
  return <Header latestData={latestData} />;
}

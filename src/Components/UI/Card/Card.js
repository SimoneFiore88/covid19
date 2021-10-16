export default function Card({ label, value }) {
  return (
    <div className="p-4 border border-gray-200 shadow-lg rounded-md">
      <h3 className="font-semibold">{label}</h3>
      <h4 className="text-lg text-right font-bold mt-4">
        {new Intl.NumberFormat("it").format(value)}
      </h4>
    </div>
  );
}

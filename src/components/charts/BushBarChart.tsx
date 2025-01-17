import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data1 = [
  {
    name: "Semana Actual",
    TrasnporteMaritimo: 300,
    Centro: 456,
    Planta: 120,
    TransporteTerrestre: 200,
    Acopio: 150,
  },
  {
    name: "Semana Anterior",
    TrasnporteMaritimo: -145,
    Centro: 230,
    Planta: 130,
    TransporteTerrestre: 180,
    Acopio: 120,
  },
  {
    name: "3",
    TrasnporteMaritimo: -100,
    Centro: 345,
    Planta: 110,
    TransporteTerrestre: 160,
    Acopio: 130,
  },
  {
    name: "4",
    TrasnporteMaritimo: -8,
    Centro: 450,
    Planta: 140,
    TransporteTerrestre: 220,
    Acopio: 140,
  },
  {
    name: "5",
    TrasnporteMaritimo: 100,
    Centro: 321,
    Planta: 150,
    TransporteTerrestre: 190,
    Acopio: 160,
  },
  {
    name: "6",
    TrasnporteMaritimo: 9,
    Centro: 235,
    Planta: 120,
    TransporteTerrestre: 210,
    Acopio: 170,
  },
  {
    name: "7",
    TrasnporteMaritimo: 53,
    Centro: 267,
    Planta: 110,
    TransporteTerrestre: 230,
    Acopio: 180,
  },
  {
    name: "8",
    TrasnporteMaritimo: 252,
    Centro: -378,
    Planta: 160,
    TransporteTerrestre: 250,
    Acopio: 190,
  },
];

export function BushBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data1}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="Centro" fill="#8884d8" />
        <Bar dataKey="TrasnporteMaritimo" fill="#82ca9d" />
        <Bar dataKey="Acopio" fill="#d0ed57" />
        <Bar dataKey="TransporteTerrestre" fill="#ff7300" />
        <Bar dataKey="Planta" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
}

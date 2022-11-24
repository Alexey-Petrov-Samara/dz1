// import s from './index.module.css';
import { pokemonData } from "./pokemon.js";
import { Table as TableAnt, Typography, Image } from "antd";

const { Text } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <Text copyable>{text}</Text>,
  },
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Class",
    dataIndex: "classification",
    key: "classification",
    filters: [
      {
        text: "Mole Pokémon",
        value: "Mole Pokémon",
      },
      {
        text: "Cocoon Pokémon",
        value: "Cocoon Pokémon",
      },
    ],
    onFilter: (value, item) => item.classification.includes(value),
  },
  {
    title: "Maximum HP",
    dataIndex: "maxHP",
    key: "maxHP",
    sorter: (a, b) => a.maxHP - b.maxHP,
    defaultSortOrder: "ascend",
  },
  {
    title: "Maximum CP",
    dataIndex: "maxCP",
    key: "maxCP",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (src) => <Image width={120} src={src} preview={false} />,
  },
];

const dataPokemon = pokemonData.map(pokemon => ({
  name: pokemon.name,
  number: pokemon.number,
  classification: pokemon.classification,
  maxHP: pokemon.maxHP,
  maxCP: pokemon.maxCP,
  key: pokemon.id,
  image: pokemon.image,
}));

const Table = ({ rows = 10 }) => {
  return (
    <TableAnt
      dataSource={dataPokemon}
      columns={columns}
      pagination={{
        pageSize: rows,
        // pageSizeOptions: [20,50,100],
        // defaultPageSize: 100,
        showSizeChanger: false,
      }}
    />
  );
};

export default Table;

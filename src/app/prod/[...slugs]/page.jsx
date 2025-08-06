// файл: src/app/prod/[...slugs]/page.jsx

export default function Prod({ params }) {
	console.log('params:', params);
  const [category, name] = params?.slugs || [];

  const prods = [
    { category: 'catg1', name: 'prod1', cost: 100 },
    { category: 'catg1', name: 'prod2', cost: 200 },
    { category: 'catg2', name: 'prod1', cost: 300 },
    { category: 'catg2', name: 'prod3', cost: 400 },
  ];

  const prod = prods.find(
    (prod) => prod.category === category && prod.name === name
  );

  if (!prod) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <p>{prod.category}</p>
      <p>{prod.name}</p>
      <p>{prod.cost}</p>
    </div>
  );
}

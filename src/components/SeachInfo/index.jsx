import "./index.css";

const SeachInfo = ({searchText, searchCount}) => {
	return (
		searchText && <section className="search-title">
			По запросу <span>{searchText}</span> найдено {searchCount} товаров 
		</section>
	); // завести утилиту в компоненте searchCount (2-48 тайм) для правильного отображения окончания в зависимости от числа
};

export default SeachInfo;

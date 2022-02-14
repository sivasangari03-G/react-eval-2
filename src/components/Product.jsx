import React, { useEffect, useState } from "react";
import { ProductInput } from "./ProductInput";
import { ProductList } from "./ProductList";

export const Product = () => {
	const [data, setData] = useState({});
    const [product, setProduct] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [veg,setVeg] = useState([])
	const handleData = (e) => {
		const { name, value } = e.currentTarget;
		setData({
			...data,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		let _data = {
			title: data.title,
			cost: data.cost,
			image: data.image,
			category: data.category,
		};

		fetch("http://localhost:8000/posts", {
			method: "POST",
			body: JSON.stringify(_data),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				display();
			})
			.catch((err) => console.log(err));
	};

	function display() {
		fetch(`http://localhost:8000/posts?_page=${pageNumber}&_limit=3`, {
			method: "GET",
			headers: {
				"content-type": "application/json; charset=utf-8",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((forJson) => {
				// console.log("forJson1", forJson);
				// appendProduct(forJson);
				setProduct(forJson);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	useEffect(() => {
		display();
	}, [pageNumber]);

	const handlePrev = () => {
		if (pageNumber > 1) {
			setPageNumber(pageNumber - 1);
		}
	};
	const handleNext = () => {
		setPageNumber(pageNumber + 1);
	};
	const handleVegetables = () => {
        product.forEach((item) => {
            console.log(item);
            if (item.category === "vegetables") {
				veg.push(item);
			}
        });
        setProduct([...veg]);
    };


    const handleFruit = () => {
		product.forEach((item) => {
			console.log(item);
			if (item.category === "fruits") {
				veg.push(item);
			}
		});
		setProduct([...veg]);
    };
     const handleProvision = () => {
			product.forEach((item) => {
				console.log(item);
				if (item.category === "provisions") {
					veg.push(item);
				}
			});
			setProduct([...veg]);
		};
	return (
		<>
			<ProductInput
				data={data}
				handleData={handleData}
				handleSubmit={handleSubmit}
			/>
			<div>
				<button onClick={handleVegetables}>Filter by vegetables</button>
				<button onClick={handleFruit}>Filter by fruits</button>
				<button onClick={handleProvision}>Filter by provision</button>
			</div>
			<ProductList product={product} />
			<div>
				<button onClick={handlePrev}>Prev</button>
				<button onClick={handleNext}>Next</button>
			</div>
		</>
	);
};

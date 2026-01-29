import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sale.css';

const Sale = () => {
    const [sales, setSales] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/sales/recent")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch sales');
                }
                return response.json();
            })
            .then(data => {
                setSales(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);
    const handleItemClick = () => {
        // Cuộn lên đầu trang khi bấm vào sản phẩm
        window.scrollTo(0, 0);
    };
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Sản Phẩm Được Ưa Chuộng</h2>
            <div className="sale-list">
                {sales.map(sale => (
                    <div key={sale.id} className="sale-item">
                        <Link to={`/product-detail?productId=${sale.product.id}`} onClick={handleItemClick}>
                            <img src={`./images/items/${sale.product.thumbnail}`} alt={sale.product.title} />
                        </Link>
                        <p>{sale.product.title}</p>
                        <p>{sale.quantitySold} sản phẩm đã được bán {sale.saleDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sale;

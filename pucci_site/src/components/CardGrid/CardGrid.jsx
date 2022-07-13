import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from '../ProductCard/ProductCard';
import './CardGrid.css';

function CardGrid() {
    return (
        <Row xs={1} md={2} lg={4}>
            {Array.from({ length: 20 }).map((_, idx) => (
                <Col>
                    <ProductCard/>
                </Col>
            ))}
        </Row>
    );
};

export default CardGrid;
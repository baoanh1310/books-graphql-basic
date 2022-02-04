import React from 'react';
import Card from 'react-bootstrap/Card';

const BookDetails = () => {
    return (
        <Card bg='info' text='white' className='shadow'>
            <Card.Body>
                <Card.Title>Mastering Ethereum</Card.Title>
                <Card.Subtitle>Blockchain</Card.Subtitle>
                <p>Vitalik Buterin</p>
                <p>Age: 25</p>
                <p>All books by this author</p>
                <ul>
                    <li>Mastering Ethereum</li>
                    <li>Ethereum 2.0</li>
                </ul>
            </Card.Body>
        </Card>
    );
};

export default BookDetails;

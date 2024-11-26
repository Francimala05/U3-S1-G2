

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import books from '../../fantasy.json'; // Importa il file JSON

function BasicExample() {
  return (
    <div className="container mt-4">
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4" key={book.asin}>
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  {book.price+"$"}
                </Card.Text>
                <Button variant="primary">Acquista ora!</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;
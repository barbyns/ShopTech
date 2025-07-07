import { useState } from 'react';
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';
import type { Product } from '../types/Product';

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Smartphone X',
    description: 'Telefono top di gamma',
    price: 799,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'Auricolari Bluetooth',
    description: 'Auricolari comodi con ottimo audio',
    price: 149,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
];

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [form, setForm] = useState<Product>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
  });

  const handleShow = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setForm(product);
    } else {
      setEditingProduct(null);
      setForm({ id: 0, name: '', description: '', price: 0, imageUrl: '' });
    }
    setShowModal(true);
  };

  const handleSave = () => {
    if (editingProduct) {
      // Update
      setProducts(prev =>
        prev.map(p => (p.id === editingProduct.id ? form : p))
      );
    } else {
      // Create
      const newProduct = { ...form, id: Math.max(...products.map(p => p.id)) + 1 };
      setProducts(prev => [...prev, newProduct]);
    }
    setShowModal(false);
  };

  const handleDelete = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <Container className="mt-4">
      <h2>Gestione Prodotti (Admin)</h2>
      <Button className="mb-3" onClick={() => handleShow()}>+ Aggiungi Prodotto</Button>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th><th>Nome</th><th>Prezzo</th><th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>€{prod.price.toFixed(2)}</td>
              <td>
                <Button size="sm" variant="warning" onClick={() => handleShow(prod)}>Modifica</Button>{' '}
                <Button size="sm" variant="danger" onClick={() => handleDelete(prod.id)}>Elimina</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal per aggiunta/modifica */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingProduct ? 'Modifica' : 'Aggiungi'} Prodotto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Nome</Form.Label>
              <Form.Control value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Prezzo</Form.Label>
              <Form.Control type="number" value={form.price} onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })} />
            </Form.Group>
            <Form.Group className="mb-2">
  <Form.Label>Immagine Prodotto</Form.Label>
  <Form.Control
    type="file"
    accept="image/*"
    onChange={(e) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setForm({ ...form, imageUrl: reader.result as string });
        };
        reader.readAsDataURL(file);
      }
    }}
  />
</Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Annulla</Button>
          <Button variant="primary" onClick={handleSave}>Salva</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminProducts;

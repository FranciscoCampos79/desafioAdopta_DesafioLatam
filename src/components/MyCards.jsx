import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCards = ({colorborde, imagen, title, descripcion, colorBdg}) => {
    console.log(Tags)
    return (
        <>
            
            <Card border={colorborde} style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {imagen} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text> {descripcion} </Card.Text>
                <Tags colorBdg={colorBdg}/>
            </Card.Body>
            </Card>
        </>
      );
};

export default MyCards;
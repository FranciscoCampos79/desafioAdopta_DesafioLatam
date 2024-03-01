import Badge from 'react-bootstrap/Badge';

const Tags = ({colorBdg, textoBdg = 'Adoptame'}) => {
    return(
      <>
      <h3>
         <Badge bg= {colorBdg} style={{width:'200px'}} > {textoBdg} </Badge>
      </h3>
      </>
    )
};

export default Tags;
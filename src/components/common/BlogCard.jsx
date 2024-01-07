import Card from 'react-bootstrap/Card';

function BlogCard({tittle,image,description}) {
  return <div className='mx-auto'>
    <Card style={{ width: '30rem',padding:"10px" }}>

      <Card.Title>{tittle}</Card.Title>
      <Card.Img variant="top"  src={image} />
      <Card.Body>
      
        <Card.Text>
       {description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    }

export default BlogCard;
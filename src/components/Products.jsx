// https://www.hogarmania.com/salud/salud-familiar/remedios-naturales/plantas-relajantes-para-bienestar-emocional-12913.html
import Card from 'react-bootstrap/Card'
import avena from '../assets/imgs/avena.jpg'
import hiperico from '../assets/imgs/hiperico.jpg'
import melisa from '../assets/imgs/melisa.jpg'

export function Products() {
  const products = [
    {
      image: avena,
      name: 'Avena', 
      gender: 'Hembra', 
      ref: 'PL001', 
      size: '1,5 mts', 
      amount: 20, 
      description: `La avena es un excelente tónico del sistema nervioso, 
        mejora el nerviosismo, agotamiento y ansiedad, y reduce el estrés.`
    },
    {
      image: hiperico,
      name: 'Hipérico', 
      gender: 'Macho', 
      ref: 'PL002', 
      size: '1 mt', 
      amount: 20, 
      description: `El hipérico alivia los síntomas de la depresión leve o 
        moderada y también es útil en casos de trastorno de espectro autista, 
        ansiedad o agotamiento. Tomar en infusión, tintura o cápsulas.`
    },
    {
      image: melisa,
      name: 'Melisa', 
      gender: 'Hembra', 
      ref: 'PL003', 
      size: '1,6 mts', 
      amount: 15, 
      description: `Antidepresiva, estimulante y calmante, la melisa levanta 
        el ánimo y calma la ansiedad, el nerviosismo y los ataques de pánico.`
    }
  ]

  return (
    <div className='d-flex'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={avena} />
        <Card.Body>
          <Card.Title>Avena</Card.Title>
          <Card.Text>
            <b>Sexo:</b> F
            <br/><b>Referencia: </b> PL001
            <br/><b>Tamaño: </b> 1,5 mts
            <br/><b>Cantidad: </b> 20
            <br/><b>Descripción: </b> La avena es un excelente tónico del 
              sistema nervioso, mejora el nerviosismo, agotamiento y ansiedad, 
              y reduce el estrés.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={hiperico} />
        <Card.Body>
          <Card.Title>Hiperico</Card.Title>
          <Card.Text>
            <b>Sexo:</b> M
            <br/><b>Referencia: </b> PL001
            <br/><b>Tamaño: </b> 1 mt
            <br/><b>Cantidad: </b> 15
            <br/><b>Descripción: </b> El hipérico alivia los síntomas de la 
              depresión leve o moderada y también es útil en casos de trastorno 
              de espectro autista, ansiedad o agotamiento. Tomar en infusión, 
              tintura o cápsulas.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
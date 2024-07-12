import { Container, Col, Row, Image } from "react-bootstrap";

export default function Hero({ title, lead }) {
  return (
    <Container fluid className="text-center pg-5 bg-light">
      <Row className="py-lg-5">
        <Col lg='3' md='2'>
          <Image src="/images/smoothie1.jpg" fluid/>
        </Col>
        <Col lg='6' md='8' className="mx-auto">
          <h1 className="fw-light">{title}</h1>
          <p className="lead text-muted">{lead}</p>
        </Col>
        <Col lg='3' md='2'>
        <Image src="/images/smoothie2.jpg" fluid/>
        </Col>
      </Row>
    </Container>
  );
}

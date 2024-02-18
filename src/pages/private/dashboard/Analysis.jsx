import { Panel, Placeholder, Row, Col } from "rsuite";

const cardDetail = [
  {
    title: "Total Price",
    imag: "img",
    number: 324324,
  },
  {
    title: "Total Price",
    imag: "img",
    number: 324324,
  },

  {
    title: "Total Price",
    imag: "img",
    number: 324324,
  },
  {
    title: "Total Price",
    imag: "img",
    number: 324324,
  },
];
const Card = (props) => (
  <Panel {...props} bordered header="Card title">
    <Placeholder.Paragraph />
  </Panel>
);

const Analysis = () => (
  <Row className=" m-2">
    <Col className="my-2" lg={6} md={12} xs={24}>
      <Card />
    </Col>
    <Col className="my-2" lg={6} md={12} xs={24}>
      <Card />
    </Col>
    <Col className="my-2" lg={6} md={12} xs={24}>
      <Card />
    </Col>
    <Col className="my-2" lg={6} md={12} xs={24}>
      <Card />
    </Col>
  </Row>
);

// ReactDOM.render(<App />, document.getElementById('root'));
export default Analysis;

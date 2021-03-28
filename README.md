## REACT NATIVE KIT BY URIP

### Installation

```bash
npm install github:subekti404dev/urip-rn-kit
# or
yarn add github:subekti404dev/urip-rn-kit
```

### Example Usage

```jsx
import {Row, Col, utils, ScaledText} from 'urip-rn-kit'

addTax = () => {
  const price = utils.fromIDR('Rp 2.000');
  const tax = 10/100 * price;
  const total = price + tax;
  console.log(total);
}

render() {
  return (
    <Row>
      <Col>
        <Text>{utils.formatIDR(10000)}</Text>
        <Text>{utils.formatDate(new Date())}</Text>
      </Col>
      <Col size={2}>
        <ScaledText
          size={25} 
          uppercase 
          bold
          italic
          underline
          >
          TEXT
        </ScaledText>
      </Col>
    </Row>
  )
}

```

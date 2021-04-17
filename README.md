[![view on npm](http://img.shields.io/npm/v/urip-rn-kit.svg)](https://www.npmjs.org/package/urip-rn-kit)
[![npm module downloads per month](http://img.shields.io/npm/dm/urip-rn-kit.svg)](https://www.npmjs.org/package/urip-rn-kit)
## REACT NATIVE KIT BY URIP

### Installation

```bash
npm install urip-rn-kit
# or
yarn add urip-rn-kit
```

### Example Usage

```jsx
import {Row, Col, ScaledText, Dropdown, RadioButtonGroup, utils} from 'urip-rn-kit'

addTax = () => {
  const price = utils.fromIDR('Rp 2.000');
  const tax = 10/100 * price;
  const total = price + tax;
  console.log(total);
}

addEventListener = () => {
  utils.eventUtil.on('test', () => {
    console.log('ini adalah test');
  });
}

triggerEvent = () => {
  utils.eventUtil.emit('test');
}

removeEventListener = () => {
  utils.eventUtil.remove('test');
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
          color={"red"}
          uppercase
          bold
          italic
          underline
          >
          TEXT
        </ScaledText>
      </Col>

      <Dropdown
        data={[
          {label: 'Tes1', value: '1'},
          {label: 'Tes2', value: '2'},
          {label: 'Tes3', value: '3'},
          {label: 'Tes4', value: '4'},
          {label: 'Tes5', value: '5'},
          {label: 'Tes6', value: '6'},
          {label: 'Tes7', value: '7'},
        ]}
        value={'1'}
        onChange={console.log}
      />

      <RadioButtonGroup
        data={['Tes 1', 'Tes 2']}
        activeIndex={1}
        onChange={console.log}
      />

      <CheckboxGroup
        color="green"
        data={['Tes 1', 'Tes 2']}
        selected={['Tes 1']}
        onChange={console.log}
      />
    </Row>
  )
}

```

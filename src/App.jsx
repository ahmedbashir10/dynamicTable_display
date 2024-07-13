import React from 'react';
import DynamicTable from './DynamicTable';

const App = () => {
  const operation1 = {
    title: 'Get AC Analog Data',
    dataFlag: '00',
    CommandInfo: '01',
    NrOfChannels: 2,
    'ACinputChannel 0': {
      'AC-L: 1 Volt': {
        value: 0,
        unit: 'V',
      },
      'AC-L: 2 Volt': {
        value: 234.625,
        unit: 'V',
      },
      'AC-L: 3 Volt': {
        value: 0,
        unit: 'V',
      },
      'AC Frequency': {
        value: 49.8671875,
        unit: 'Hz',
      },
      'Data quantified': {
        value: 0,
        unit: '',
      },
    },
    'ACinputChannel 1': {
      'AC-L: 1 Volt': {
        value: 1.3563156426940112e-19,
        unit: 'V',
      },
      'AC-L: 2 Volt': {
        value: 1.3563156426940112e-19,
        unit: 'V',
      },
      'AC-L: 3 Volt': {
        value: 1.3563156426940112e-19,
        unit: 'V',
      },
      'AC Frequency': {
        value: 1.3563156426940112e-19,
        unit: 'Hz',
      },
      'Data quantified': {
        value: 0,
        unit: '',
      },
    },
  };

  return (
    <div>
      <h1>Operation 1 Data</h1>
      <DynamicTable data={operation1} />
    </div>
  );
};

export default App;

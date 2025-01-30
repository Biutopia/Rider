import React from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { exampleAtom } from '../state/atoms';

const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Title = styled.h1`
  color: #333;
`;

const ExampleComponent: React.FC = () => {
  const [exampleState, setExampleState] = useAtom(exampleAtom);

  return (
    <Container>
      <Title>Example Component</Title>
      <p>Current State: {exampleState}</p>
      <button onClick={() => setExampleState(prev => prev + 1)}>Increment</button>
    </Container>
  );
};

export default ExampleComponent;
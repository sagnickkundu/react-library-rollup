import React from 'react';
import {TestComponentProps} from './types';
import styles from './styles.module.css';

const TestComponent: React.FC<TestComponentProps> = ({heading, content}) => (
  <div data-testid="test-component" className={styles.container}>
    <h1 data-testid="test-component__heading" className={styles.heading}>
      {heading}
    </h1>
    <div data-testid="test-component__content">{content}</div>
  </div>
);

export default TestComponent;

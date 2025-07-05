// components/ErrorProneComponent.tsx
import { useEffect } from 'react';

const ErrorProneComponent: React.FC = () => {
  useEffect(() => {
    throw new Error('This is a test error!');
  }, []);

  return <div>This will crash</div>;
};

export default ErrorProneComponent;

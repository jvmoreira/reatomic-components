import 'jest-extended';
import '@testing-library/jest-dom';
import 'jest-styled-components';

declare global {
  type AllOrNothing<T extends Record<string, unknown>> = T | Partial<Record<keyof T, never>>;

  type OneOrAnother<One, Another> =
    | One & Partial<Record<keyof Another, never>>
    | Another & Partial<Record<keyof One, never>>;
}

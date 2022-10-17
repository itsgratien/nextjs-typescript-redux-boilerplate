import { setupWorker } from 'msw';
import { handlers } from './Handlers';

export const browser = setupWorker(...handlers);

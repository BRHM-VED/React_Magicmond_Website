import { RouterProvider } from 'react-router-dom';
import { router } from './controllers/router';

export default function App() {
  return <RouterProvider router={router} />;
}

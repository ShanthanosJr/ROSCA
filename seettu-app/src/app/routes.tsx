import { createBrowserRouter, useRouteError } from 'react-router-dom';
import { RequireRole } from '../shared/components/RequireRole';
import { MemberDashboardPage } from '../modules/member-dashboard';
import { HomePage } from '../modules/home';
// import remaining module entry pages as they're built

function ErrorBoundary() {
  const error = useRouteError() as any;
  return (
    <div className="p-4">
      <h1 className="text-xl text-danger">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-muted">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export const router = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <ErrorBoundary /> },
  { path: '/login', element: <div>Login screen (PhoneInput + OtpInput)</div>, errorElement: <ErrorBoundary /> },
  { path: '/member', element: <RequireRole role="member"><MemberDashboardPage /></RequireRole>, errorElement: <ErrorBoundary /> },
  { path: '/unauthorized', element: <div>Not authorized for this view.</div>, errorElement: <ErrorBoundary /> },
  { path: '*', element: <div className="p-4 text-center">404 Not Found</div> }
]);

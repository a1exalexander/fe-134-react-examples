/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

export const withProviders =
  (...providers) =>
  (Component) => {
    return providers.reduce((AccumulatedComponent, CurrentProvider) => {
      return ({ children }) => (
        <CurrentProvider>
          <AccumulatedComponent>{children}</AccumulatedComponent>
        </CurrentProvider>
      );
    }, Component);
  };

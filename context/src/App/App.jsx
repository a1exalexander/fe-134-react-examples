import { Router } from "../Router";
import { UserContextProvider } from "../context/UserContext";
import { ThemeContextProvider } from "../context/ThemeContext";
import { withProviders } from "../utils/withProviders";

export const App = withProviders(
  ThemeContextProvider,
  UserContextProvider
)(Router);

// or this way if there are not many providers

// export const App = () => {
//   return (
//     <ThemeContextProvider>
//       <UserContextProvider>
//         <Router />
//       </UserContextProvider>
//     </ThemeContextProvider>
//   );
// };

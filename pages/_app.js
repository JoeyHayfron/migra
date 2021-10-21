import "../styles/globals.css";
import App from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/redux/store/index";

class MyApp extends App {
  static async getSaticProps(ctx) {
    const appProps = await App.getSaticProps(ctx);
    return { appProps };
  }
  render() {
    const {
      Component,
      appProps,
      router: { route, pathname, query },
    } = this.props;
    return (
      <Provider store={store}>
        <Component {...appProps} pathname={pathname} query={query} />
      </Provider>
    );
  }
}

export default MyApp;

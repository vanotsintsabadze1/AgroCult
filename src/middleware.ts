import { chain } from "./middlewares/chain";
import { localeRedirection } from "./middlewares/localeRedirection";
import { auth } from "./middlewares/auth";

export default chain([localeRedirection, auth]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};

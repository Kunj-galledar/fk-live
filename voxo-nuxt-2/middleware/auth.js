export default function ({ app, route, redirect }) {
  var pagesToCheck = [];
  if (pagesToCheck.includes(route.path)) {
    if (route.path !== "/page/login") {
      //we are on a protected route
      if (!app.$fire.auth.currentUser) {
        //take them to sign in page
        return redirect("/page/login");
      }
    } else if (route.path === "/page/login") {
      if (!app.$fire.auth.currentUser) {
        //leave them on the sign in page
      } else {
        return redirect("/page/login");
      }
    }
  }
}

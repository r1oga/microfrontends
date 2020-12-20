# Microfrontends with webpack ModuleFederationPlugin
|Package|Type|Port|Framework|
|--|--|--|--|
|container|host|8080|react|
|marketing|remote/sub application|8081|react|
|auth|remote/sub application|8082|react|
|dashboard|remote/sub application|8083|vue|

All package have a start and build script that can be run with `yarn start` and `yarn build` respectively.

## Takeaways
- Scoped CSS
 With material-ui: use [createGenerateClassName](https://material-ui.com/styles/api/#creategenerateclassname-options-class-name-generator)
- Generic and future proof way (library agnostic) to communicate and share state between container and sub application: **callbacks**
- Generic way to integrate an app built with any framework into a react container: mount sub app in `useEffect` hook, use ref to app element with `useRef` hook. See Dashboard's [`mount`](https://github.com/r1oga/microfrontends/blob/279cd842442aa1d66011b765da29b56e65e0393c/packages/dashboard/src/bootstrap.js#L8) and [Dashboard](https://github.com/r1oga/microfrontends/blob/main/packages/container/src/components/Dashboard.js) container's component.
- For deployment with AWS CloudFront, need to invalidate remoteEntry files
- To avoid not found files errors with nested path/routes, don't forget to set the weback [publicPath](https://github.com/r1oga/microfrontends/blob/279cd842442aa1d66011b765da29b56e65e0393c/packages/auth/config/webpack.prod.js#L11). ([webpack doc](https://webpack.js.org/guides/public-path/))
- For better performance, share libraries using webpack [shared](https://github.com/r1oga/microfrontends/blob/279cd842442aa1d66011b765da29b56e65e0393c/packages/auth/config/webpack.prod.js#L18) ModuleFederationPlugin setting.
- [Use exported `mount` function for running in container, mount into element specific to sub application for running in isolation](https://github.com/r1oga/microfrontends/blob/279cd842442aa1d66011b765da29b56e65e0393c/packages/marketing/src/bootstrap.js#L30)

# One App, many places
<img width="1741" alt="screen shot 2017-10-20 at 5 35 21 pm" src="https://user-images.githubusercontent.com/310223/31846208-4ecddc0a-b5bd-11e7-8f90-82b87e1272ad.png">

Above is a preview of a [simple glossary app](https://expo-next-shared.herokuapp.com/).

Today it is possible for a [NextJS](https://github.com/zeit/next.js/) and an [Expo](https://expo.io) to live in the same codebase!

- The only differences now are [React Native](https://facebook.github.io/react-native/) and [React Web](https://reactjs.org/) components.
- We can't share styles. In this example `glamor/aphrodite` and `react-native` feel similar, but are different once you begin working with style properties.
- Share all other JavaScript.
    - Redux is a great candidate for this!
- Share a package.json
- Share node_modules

### Start NextJS
* View it on the web: https://expo-next-shared.herokuapp.com/
* You can easily deploy your own to the web.
    - `heroku apps:create your-app-name`
    - `git push heroku master`.

```
yarn
yarn run dev
```

### Start Expo
* View it on Expo.io: https://expo.io/@jimmylee/expo-next-shared

```
npm install -g exp
yarn
exp start
```

### Differences
The screenshot below captures some of the differences between React Native and React. Some notable examples are `styles` versus `className` with a `css` method.

<img width="2560" alt="screen shot 2017-10-20 at 5 04 04 pm" src="https://user-images.githubusercontent.com/310223/31846144-7f25c38c-b5bc-11e7-97ad-21f69741961a.png">


### Questions?

Leave an issue or ping me at [@meanJim](https://www.twitter.com/meanjim)

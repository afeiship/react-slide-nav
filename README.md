# react-slide-nav
> React slide nav.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-slide-nav
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-slide-nav/dist/style.css";

  // or use sass
  @import "~@jswork/react-slide-nav/dist/style.scss";
  ```
2. import js
  ```js
  import ReactSlideNav from '@jswork/react-slide-nav';
  import '@jswork/react-slide-nav/dist/style.scss';

  function App() {
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <h1>react-slide-nav</h1>
        <dl>
          <dt className="text-lg text-center">Events: [onClick]</dt>
          <dd>
            <ReactSlideNav
              className="x-5 h-10 fcc"
              activeClassName="text-red-600"
              items={['Home', 'About', 'Contact Us', 'FAQ']}
            />
          </dd>
        </dl>
        <div className="blank-px-y-1 bg-green-500 my-5"></div>
        <dl>
          <dt className="text-lg text-center">Events: [onClick, onMouseOver]</dt>
          <dd>
            <ReactSlideNav
              className="x-5 h-10 fcc"
              activeClassName="text-red-600"
              events={['onClick', 'onMouseOver']}
              items={['Home', 'About', 'Contact Us', 'FAQ']}
            />
          </dd>
        </dl>
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-slide-nav/

## license
Code released under [the MIT license](https://github.com/afeiship/react-slide-nav/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-slide-nav
[version-url]: https://npmjs.org/package/@jswork/react-slide-nav

[license-image]: https://img.shields.io/npm/l/@jswork/react-slide-nav
[license-url]: https://github.com/afeiship/react-slide-nav/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-slide-nav
[size-url]: https://github.com/afeiship/react-slide-nav/blob/master/dist/react-slide-nav.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-slide-nav
[download-url]: https://www.npmjs.com/package/@jswork/react-slide-nav

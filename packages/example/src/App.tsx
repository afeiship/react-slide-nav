import ReactSlideNav from '@jswork/react-slide-nav/src';
import '@jswork/react-slide-nav/src/style.scss';

function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <h1>react-slide-nav</h1>
      <dl>
        <dd>
          <ReactSlideNav
            className="x-5 h-10 fcc"
            activeClassName="text-red-600"
            items={['Home', 'About', 'Contact Us', 'FAQ']}
            onChange={(e) => console.log('on item click: ', e)}
          />
        </dd>
      </dl>
    </div>
  );
}

export default App;

import ReactSlideNav from '@jswork/react-slide-nav/src';
import '@jswork/react-slide-nav/src/style.scss';
import { useState } from 'react';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

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
            value={activeIndex}
            onChange={(e) => {
              console.log('change?: ', e);
              setActiveIndex(e);
            }}
          />
        </dd>
      </dl>
      <div className="blank-y-2" />
      <nav className="x-2 fcc">
        <button className="btn btn-sm btn-primary" onClick={() => setActiveIndex(0)}>
          set to 1
        </button>
        <button className="btn btn-sm btn-primary" onClick={() => setActiveIndex(1)}>
          set to 2
        </button>
        <button className="btn btn-sm btn-primary" onClick={() => setActiveIndex(2)}>
          set to 3
        </button>
        <button className="btn btn-sm btn-primary" onClick={() => setActiveIndex(3)}>
          set to 4
        </button>
      </nav>
    </div>
  );
}

export default App;

import Loadable from 'react-loadable';

const loader = () => <div>Loading.</div>;
//
const HomeLazy = Loadable({
  loader: () => import('../components/sections/Home'),
  loading: loader,
});

export default function Home() {
  return (
    <>
      <HomeLazy />
    </>
  );
}

import { FC } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './index.less';

const BasicLayout: FC = (props) => {
  console.log('props', props)
  return (
    <div className='BasicLayout'>
      <Header />
      {props.children}
      {/* <Footer /> */}
    </div>
  )
};

export default BasicLayout
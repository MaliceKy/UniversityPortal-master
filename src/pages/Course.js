// Course.js
import NavigationButtons from '../components/NavigationButtons';
import '../styles/Course.css';

function Pages({ setCurrentPage }) {
  return (
    <div>
      <NavigationButtons setCurrentPage={setCurrentPage} />
      {/* Other components and elements */}
    </div>
  );
}

export default Pages;


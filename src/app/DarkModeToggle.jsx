import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.add('dark-mode'); // Thêm class 'dark-mode' vào body
    } else {
      setTheme('light');
      document.body.classList.remove('dark-mode'); // Xóa class 'dark-mode' khỏi body
    }
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      {/* <Component {...pageProps} /> */}
    </div>
  );
}

export default MyApp;
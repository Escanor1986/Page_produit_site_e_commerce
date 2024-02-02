interface ThemeToggleProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

function ThemeToggle({ toggleTheme, darkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="toggle-theme-button flex flex-row space-x-2 items-center rounded-lg border-0 border-transparent cursor-pointer text-slate-100 bg-slate-700 p-3 dark:text-slate-700 dark:bg-slate-100 "
    >
      <span>Go {darkMode ? 'Light' : 'Dark'}</span>
      {darkMode ? (
        <i className="fa-regular fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </button>
  );
}

export default ThemeToggle;

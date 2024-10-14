export const changeTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
};

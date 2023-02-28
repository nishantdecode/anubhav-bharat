const background = {
    paper: "#fff",
    default: '#fdfdfd',
  };
  const text = {
    primary: '#112b3c',
    secondary: '#808080',
    disabled: "rgba(0, 0, 0, 0.38)",
  };
  const divider = '#808080';
  const primary = {
    main: '#ff7722',
    light: '#fdf8f4',
    dark: '#f25d00',
    contrastText: '#ffffff',
  };
  const secondary = {
    main: '#ffbd39',
    light: '#fff7e7',
    contrastText: '#ffffff',
    dark: '#ffaa00',
  };
  const info = {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: "#fff",
  };
  const warning = {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    contrastText: "#fff",
  };
  const error = {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: "#fff",
  };
  const success = {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: "#fff",
  };
  const action = {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  };
export const lightTheme = {
    palette: {
        mode: "light",
        background,
        primary,
        secondary,
        text,
        info,
        warning,
        error,
        success,
        divider,
        action,
    },
};
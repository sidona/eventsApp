import {ThemeProvider, createTheme, css} from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        primary: { main: "#1e0446" },
        secondary: { main: "#2a48f3" },
        mode: 'light',
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(to right bottom, #C6A5FCFF, #fff)'
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    background: 'radial-gradient(circle 50vh at 0% 100%, #C6A5FCFF, #fff)'
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    background: '#fff'
                }
            }
        }
    }
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: "#9147FF" },
        secondary: { main: "#2a48f3" },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(to right bottom, #C6A5FCFF, #1E0446FF)'
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    background: 'radial-gradient(circle 50vh at 0% 100%, #C6A5FCFF, #1E0446FF)'
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    background: '#C6A5FCFF'
                }
            }
        }
    }
})
export const globalStyles = css`
  :root {
    body {
      background-color: #fff;
      color: #121212;
    }
  }

  [data-theme="dark"] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }
`;

import React, { useState } from 'react';
import { Container, CssBaseline, Typography, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ConnectWallet from './ConnectWallet';
import TokenFactory from './TokenFactory';
import AirdropLaunchpad from './AirdropLaunchPad';
import theme from './theme';


function App() {
    const [signer, setSigner] = useState(null);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
                  
                    <Typography variant="h3" gutterBottom>
                        CorePad
                    </Typography>
                </Box>
                <ConnectWallet setSigner={setSigner} />
                <TokenFactory signer={signer} />
                <AirdropLaunchpad signer={signer} />
            </Container>
        </ThemeProvider>
    );
}

export default App;

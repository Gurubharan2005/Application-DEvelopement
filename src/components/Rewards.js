import React, { useState } from 'react';
import { ethers } from 'ethers';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import MetaMaskLogo from './metamask.png'; 
import { Link } from 'react-router-dom';

const USDT_ABI = [
  "function transfer(address to, uint256 amount) public returns (bool)"
];

function Rewards() {
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Connection error:", error);
        setError('Failed to connect wallet');
      }
    } else {
      alert('MetaMask is not installed');
    }
  };

  const sendTransaction = async () => {
    if (!account || !recipient || !amount) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();
      const usdtAddress = '0x...'; // Replace with the USDT contract address
      const usdtContract = new ethers.Contract(usdtAddress, USDT_ABI, signer);

      const amountInUnits = ethers.parseUnits(amount, 6);

      const tx = await usdtContract.transfer(recipient, amountInUnits);
      console.log('Transaction:', tx);
      alert('Transaction sent!');
    } catch (error) {
      console.error("Transaction error:", error);
      setError('Failed to send transaction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
      <Box 
        sx={{ 
          background: 'rgba(19, 67, 24, 8)', 
          padding: 4, 
          borderRadius: 2, 
          textAlign: 'center',
          boxShadow: 3
        }}
      >
        <img src={MetaMaskLogo} alt="MetaMask Logo" style={{ width: '100px', marginBottom: '20px' }} />
        <Typography variant="h5" color="white" gutterBottom>
          MetaMask USDT Transfer
        </Typography>
        {error && <Typography color="error" gutterBottom>{error}</Typography>}
        {account ? (
          <Box>
            <Typography variant="body1" color="white" gutterBottom>
              Connected as: <strong>{account}</strong>
            </Typography>
            <TextField 
              variant="outlined" 
              margin="normal" 
              required 
              fullWidth 
              label="Recipient Address" 
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)} 
              color="primary"
            />
            <TextField 
              variant="outlined" 
              margin="normal" 
              required 
              fullWidth 
              label="Amount in USDT" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)} 
              color="primary"
            />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={sendTransaction} 
              disabled={loading}
              fullWidth
              sx={{ mt: 2 }}
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </Box>
        ) : (
          <Button 
            variant="contained" 
            color="success" 
            onClick={connectWallet} 
            fullWidth
            sx={{ mt: 2 }}
          >
            Connect MetaMask
          </Button>
        )}
        <Button
          component={Link}
          to="/" // Change this to your desired route
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Home
        </Button>
      </Box>
    </Container>
  );
}

export default Rewards;

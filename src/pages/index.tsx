import React from 'react';
import TweetNFT from './components/TweetNFT';

const Home: React.FC = () => {
  // Hardcoded transaction hash for demonstration
  const txHash = "0x123456789abcdef";

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Mint Your NFT</h1>
      <p>Click the button below to mint your NFT.</p>
      {/* 
        Insert your minting logic or button here.
        For this demo, we'll assume the minting process is complete and show the result.
      */}
      <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
        <h2>Your NFT was minted successfully!</h2>
        <p>Transaction Hash: {txHash}</p>
        <p>Share your mint on Twitter:</p>
        <TweetNFT txHash={txHash} />
      </div>
    </div>
  );
};

export default Home;

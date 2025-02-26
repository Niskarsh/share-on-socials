import React from 'react';
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon,
    // InstapaperShareButton, InstagramIcon,
    RedditShareButton, RedditIcon, TelegramShareButton, TelegramIcon, LinkedinShareButton, LinkedinIcon, WhatsappShareButton, WhatsappIcon } from 'next-share';

interface TweetNFTProps {
    txHash: string;
}

const TweetNFT: React.FC<TweetNFTProps> = ({ txHash }) => {
    const explorerUrl = `https://testnet.monadexplorer.com/tx/${txHash}`;
    const tweetText = `I just minted an NFT on MyPlatform! Check out my transaction: ${explorerUrl}`;

    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <TwitterShareButton url={explorerUrl} title={tweetText} hashtags={["NFT", "MyPlatform", "Monad"]} >
                <TwitterIcon size={40} />
            </TwitterShareButton>
            <TwitterShareButton url={explorerUrl} title={tweetText} hashtags={["NFT", "MyPlatform", "Monad"]} >
                <TwitterIcon size={40} round />
            </TwitterShareButton>
            <FacebookShareButton url={explorerUrl} quote={tweetText} hashtag="Monad" >
                <FacebookIcon size={40} />
            </FacebookShareButton>
            <FacebookShareButton url={explorerUrl} quote={tweetText} hashtag="Monad" >
                <FacebookIcon size={40} round/>
            </FacebookShareButton>
            {/* <InstapaperShareButton url={explorerUrl} description={tweetText} >
                <InstagramIcon size={40} />
            </InstapaperShareButton> */}
            {/* <InstapaperShareButton url={explorerUrl} description={tweetText} >// No Instagram
                <InstagramIcon size={40} round />
            </InstapaperShareButton> */}
            <RedditShareButton url={explorerUrl} title={tweetText} >
                <RedditIcon size={40} />
            </RedditShareButton>
            <RedditShareButton url={explorerUrl} title={tweetText} >
                <RedditIcon size={40} round />
            </RedditShareButton>
            <TelegramShareButton url={explorerUrl} title={tweetText} >
                <TelegramIcon size={40} />
            </TelegramShareButton>
            <TelegramShareButton url={explorerUrl} title={tweetText} >
                <TelegramIcon size={40} round />
            </TelegramShareButton>
            <LinkedinShareButton url={explorerUrl} title="SkillsCV NFT" summary={tweetText} >
                <LinkedinIcon size={40} />
            </LinkedinShareButton>
            <LinkedinShareButton url={explorerUrl} title="SkillsCV NFT" summary={tweetText} >
                <LinkedinIcon size={40} round />
            </LinkedinShareButton>
            <WhatsappShareButton url={explorerUrl} title={tweetText} >
                <WhatsappIcon size={40} />
            </WhatsappShareButton>
            <WhatsappShareButton url={explorerUrl} title={tweetText} >
                <WhatsappIcon size={40} round />
            </WhatsappShareButton>
        </div>
    );
};

export default TweetNFT;

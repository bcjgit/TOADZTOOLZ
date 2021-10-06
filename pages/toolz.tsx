/* eslint-disable @next/next/no-img-element */
import React from "react";
import Item from "./components/Toolz/Item";
import Social from "./components/Toolz/Social";
import Section from "./components/Toolz/Section";

const Toolz = () => {
  return (
    <div className="bg-toadz-dark h-full text-white p-5 sm:px-10">
      <h1 className="text-wizards text-center xs:text-5xl sm:text-6xl mb-10">
        Toolz
      </h1>

      <Social />

      <div className="">
        <Section title="1-Per-Toad Projects">
          <Item
            name="Sockz Exchange"
            description="Sockz for toad holders. Sockz NFTs can be burned and redeemed for a real pair of sockz."
            link="https://www.sockz.exchange/"
          />
          <Item
            name="CryptoFlyz"
            description="Free mint for all toad holder. All the toad traits that you love painstakingly retuned to fit the aerodynamic body of a fly, plus some new bonus traits."
            link="https://twitter.com/masonlondon/status/1443576364913754116?s=20"
          />
          <Item
            name="Choadz"
            description="An homage to CrypToadz, brought to life in 3D by The Chunks."
            link="https://choadz.com/"
          />
        </Section>

        <Section title="Derivatives">
          <Item
            name="ZombieToadz"
            description="Collection of 5,555 zombie toadz."
            link="https://opensea.io/collection/zombietoadzofficial"
          />
          <Item
            name="69Toadz"
            description="Collection of 69 swamp-inspired toadz."
            link="https://opensea.io/collection/69toadz"
          />
          <Item
            name="CholoToadz"
            description="Collection of 500 cholo-style toadz by Blue Pastel."
            link="https://opensea.io/collection/cholotoadz"
          />
          <Item
            name="CrypTadpolez"
            description="Unique 1/1 tadpolez by nobiscum."
            link="https://opensea.io/collection/cryptadpolez"
          />
        </Section>

        <Section title="Stats & Analytics">
          <Item
            name="Flips Finance"
            description="Wide array of available stats with a great trait breakdown and comprehensive stat chart per toad."
            link="https://www.flips.finance/collection/cryptoadz-by-gremplin"
          />
          <Item
            name="Dune Analytics"
            description="More in-depth vizuals taking a deeper-dive into Cryptoadz' trading volume, top holders, and other data points!"
            link="https://dune.xyz/Artoria/Toadz-dash"
          />
          <Item
            name="Rarity"
            description="Classic tool for discovering collection's rarity and explaining asset traits and value."
            link="https://rarity.tools/cryptoadz-by-gremplin?sort=byId"
          />
        </Section>

        <Section title="News">
          <Item
            name="The Defiant • Punks or Toadz? Referential Art Project No.1 in 24-Hour Trading Volume"
            description={`"Referential Art Project No.1 in 24-Hour Trading Volume. Another day, another NFT project, but with the strong network and idiosyncratic art behind this one, it might be in it for the long haul."
            `}
            link="https://thedefiant.io/cryptoadz-nft/"
          />
          <Item
            name="New York Times • Why My NFT Toad Brought Me Joy"
            description={`"An economy where nobody works a bad job, where cryptocurrencies only go up in value and where financial planning for the future just involves buying more toads."`}
            link="https://www.nytimes.com/2021/09/20/opinion/NFT-crypto-art.html"
          />
          <Item
            name="The Defiant • Vibe! Cryptoadz Floor Price Soars as Snoop Dogg and Other NFT Buyers Pile In"
            description={`"Big players are taking notice. Cozomo de Medici, a Twitter account which the rapper Snoop Dogg claimed as his own, cashed out 140 ETH for  Cryptoadz #4236 which features a pattern referencing Fidenzas, the 999 Art Blocks pieces with a floor well over 100 ETH. "`}
            link="https://thedefiant.io/cryptotoadz-discord-snoop-starry-night/"
          />
          <Item
            name="Redlion • Cryptoadz By Gremplin"
            description={`"I think what makes Cryptoadz unique is Gremplin's referential style and irreverent artistic voice. His work is silly and fun. It comes across with an earnestness that resonates with a lot of people."`}
            link="https://www.redlion.news/article/cryptoadz-by-gremplin"
          />
        </Section>

        <Section title="Buy/Sell/Trade">
          <Item
            name="OpenSea: Low to High"
            description="View the current ''Floor Toadz'' and pick on up yourself!"
            link="https://opensea.io/collection/cryptoadz-by-gremplin?search[sortAscending]=true&search[sortBy]=PRICE&search[toggles][0]=BUY_NOW"
          />

          <Item
            name="NFTX Cryptoadz Valut"
            description="Buy from, sell into, or stake toadz in the vault to get rewarded on trading volume."
            link="https://nftx.io/vault/0x1999a92711cf8815b7f6b07bd34b4287d853cfba/buy/"
          />
          <Item
            name="Explorers Market"
            description="Buy available Explorer toadz."
            link="https://exploreringtoadz-market.vercel.app/"
          />
          <Item
            name="Ghosts Market"
            description="Buy available Ghost-body toadz."
            link="https://www.ghosts.market/"
          />
          <Item
            name="Hoodies Market"
            description="Buy available Mysterious Hoodie toadz."
            link="https://mystictoads-market.vercel.app/"
          />
          <Item
            name="Aliens Market"
            description="Buy available Alien toadz."
            link="https://alientoadz.market/"
          />
        </Section>

        <Section title="Resources">
          <Item
            name="Toadz World"
            description="CrypToadz News Roundup"
            link="https://toadz.world/"
          />
          <Item
            name="Subgraph Explorer"
            description="Subgraph published to The Graph Network to allow devs to quickly query toadz data."
            link="https://thegraph.com/legacy-explorer/subgraph/kevlee1/cryptoadz"
          />
        </Section>

        <Section title="Games">
          <Item
            name="GREMPLAND: Cryptovoxels World"
            description="Explore the Toadz metaverse."
            link="https://www.cryptovoxels.com/play?coords=N@770E,356N"
          />
          <Item
            name="Manny's Game"
            description="Play Frogger as your own toad, change the id in the url to your specific toad to play!"
            link="https://mannys.game/1?toad=35000000"
          />
          <Item
            name="Cryptoadz/Arcade NFTs Collab"
            description="Coming soon."
            link="https://medium.com/@arcadenfts/the-cryptoadz-by-gremplin-arcade-nfts-collaboration-7c3e9398432d"
          />
        </Section>

        <Section title="Art">
          <Item
            name="Cryptoadz Theme Song"
            description="music by Bettorup"
            link="https://twitter.com/cryptobuffalo/status/1437915763214479360?s=21"
          />
          <Item
            name="Neon Toad #6294"
            description="Custom Neon Toad art by Bryan Brinkman"
            link="https://twitter.com/bryanbrinkman/status/1444813816718635010?s=21"
          />
        </Section>

        <Section title="Recordings">
          <Item
            name="Moti Monday Genesis"
            description="''Moti Monday'' Twitter Spaces with Motivateme.eth hosted by Deeze from 10/4/21."
            link="https://soundcloud.com/user-814745690/moti-monday-genesis?si=7506edff7a104790a9fdd1d2a322228f"
          />
        </Section>

        <Section title="FAQ">
          TBD
          {/* <Item
            name="Q: What is CC0?"
            description="A: ___"
            link="https://cryptoadz.io"
          />
          <Item
            name="Q: Floor price?"
            description="A: 1 Toad."
            link="https://cryptoadz.io"
          />
          <Item
            name="Q: Roadmap?"
            description="A: Toadmap."
            link="https://cryptoadz.io"
          />
          <Item
            name="Q: !vibe?"
            description="A: !vibe."
            link="https://cryptoadz.io"
          /> */}
        </Section>
      </div>
    </div>
  );
};

export default Toolz;
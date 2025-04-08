import React from 'react';

const TechIllustration = () => {
  const gifs = [
    'https://media.giphy.com/media/NRBPtthrm1UruXRRs4/giphy.gif?cid=790b7611qrjf1xq7chqg9qhte3h8cltentx3oxh9abnceyrk&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media.giphy.com/media/NRBPtthrm1UruXRRs4/giphy.gif?cid=790b7611qrjf1xq7chqg9qhte3h8cltentx3oxh9abnceyrk&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    // 'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif',
    'https://media.giphy.com/media/r6iWBFHTVVnTG/giphy.gif?cid=790b7611qrjf1xq7chqg9qhte3h8cltentx3oxh9abnceyrk&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media.giphy.com/media/cQhxGRjRPPVIt9MUkX/giphy.gif?cid=790b7611qrjf1xq7chqg9qhte3h8cltentx3oxh9abnceyrk&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media.giphy.com/media/3og0IEb2EuRQ3xc7kY/giphy.gif?cid=790b7611qrjf1xq7chqg9qhte3h8cltentx3oxh9abnceyrk&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media.giphy.com/media/8pcUZOnLQ0ldECpVqe/giphy.gif?cid=ecf05e47cllyhtw7zvqmvpf1snnbd6w3cj3l2bu2vu5pecgv&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media.giphy.com/media/3ohjVa8iomT5u3NMU8/giphy.gif?cid=ecf05e47dm1nubsusp0tffbea33fr1ui7qtdjrarfz7htq2z&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media.giphy.com/media/hJ9ehuvqmJbrgZLAwB/giphy.gif?cid=ecf05e47l9ealvwf2wpks12dbtbjgs0esaagh7ou1tnrjvv8&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media.giphy.com/media/58dZhGM3SGDQs/giphy.gif?cid=ecf05e47l9ealvwf2wpks12dbtbjgs0esaagh7ou1tnrjvv8&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media.giphy.com/media/3o7aCYUOmKHUvkJPA4/giphy.gif?cid=ecf05e47l9ealvwf2wpks12dbtbjgs0esaagh7ou1tnrjvv8&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWhwYWRiNHg5N2lhcno2MHI4b3I4a2Y0MzUyM2xzbnh5YjZidWtmaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt10klilmrbO6Sk/giphy.gif'
  ];

  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <img 
        src={randomGif}
        alt="Welcome Animation"
        className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
      />
    </div>
  );
};

export default TechIllustration;
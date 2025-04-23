import React, { useState } from 'react';

export default function ProductHunterAgent() {
  const [products, setProducts] = useState([]);

  const findProducts = () => {
    const demoProducts = [
      {
        name: "Portable Car Vacuum Cleaner",
        platform: "TikTok / Amazon",
        dailySalesEstimate: 230,
        marginScore: 87,
        trendVelocity: "High",
        audience: "Busy car owners, parents",
        hook: "No more messy rides!",
        emotion: "Relief / Satisfaction",
        recommendedAdType: "Demo + POV",
        score: 91
      },
      {
        name: "Satin Heatless Curling Kit",
        platform: "TikTok / Etsy / Amazon",
        dailySalesEstimate: 190,
        marginScore: 92,
        trendVelocity: "Medium-High",
        audience: "GenZ girls, beauty moms",
        hook: "Wake up to perfect curls — no heat!",
        emotion: "Confidence / Glow-up",
        recommendedAdType: "UGC + Lifestyle",
        score: 94
      }
    ];
    setProducts(demoProducts);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🧠 ProductHunter — Live Product Scanner</h1>
      <button onClick={findProducts}>Scan for Live Winners</button>
      <div style={{ marginTop: '2rem' }}>
        {products.map((product, idx) => (
          <div key={idx} style={{ marginBottom: '1.5rem', border: '1px solid #ccc', padding: '1rem' }}>
            <h2>{product.name}</h2>
            <p><strong>Platform:</strong> {product.platform}</p>
            <p><strong>Daily Sales:</strong> {product.dailySalesEstimate} units</p>
            <p><strong>Trend Velocity:</strong> {product.trendVelocity}</p>
            <p><strong>Target Audience:</strong> {product.audience}</p>
            <p><strong>Hook:</strong> {product.hook}</p>
            <p><strong>Emotion:</strong> {product.emotion}</p>
            <p><strong>Recommended Ad Type:</strong> {product.recommendedAdType}</p>
            <p><strong>Score:</strong> {product.score}/100</p>
          </div>
        ))}
      </div>
    </div>
  );
}

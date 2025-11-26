import { useState } from 'react'
import { useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header.tsx'
import TextPressure from './components/reactbits/TextPressure/TextPressure.tsx';
import ScrollFloat from './components/reactbits/ScrollFloat/ScrollFloat.tsx';
import SpotlightCard from './components/reactbits/SpotlightCard/SpotlightCard.tsx'
import VariableProximity from './components/reactbits/VariableProximity/VariableProximity.tsx';

function App() {
  const containerRef = useRef(null);
  return (
  <>
    <Header />

    <div className="fluidContainerApp" style={{transform: 'translateY(0%)'}}>
      <div style={{position: 'relative', height: '40vh', margin: '150px', marginTop: '0', marginRight: '100px', marginLeft: '100px'}}>
        <TextPressure
          text="Hyper"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>

      <div style={{position: 'relative', height: '40vh', margin: '150px', marginRight: '100px', marginLeft: '100px'}}>
        <TextPressure
          text="Caption"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>

    </div>

    <div className="productContent">
      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >

        Make your clips speak. Instantly.

      </ScrollFloat>

      <p className="productHeadPara">Create clean captions, doodle, and collages without the drag of a full photo editor. Fast tools, zero clutter, all on a lightweight interface built for creativy.
      </p>
    </div>
    <div className="productFeatures">

      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(108, 46, 255, 0.2)">

        <div
        ref={containerRef}
        style={{position: 'relative'}}
        >

          <VariableProximity
            label={'Instant Workflow'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
          />

        </div>

        <p className="featurePara">Edit social media worthy photos in seconds. The interface stays minimal so nothing slows you down.</p>

      </SpotlightCard>

      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(108, 46, 255, 0.2)">

        <div
        ref={containerRef}
        style={{position: 'relative'}}
        >

          <VariableProximity
            label={'All for Aesthetics'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
          />

          <p className='featurePara'>Clean presets, subtle animations and filters, and simple doodle tools that let anyone create expressive visuals.</p>

        </div>

      </SpotlightCard>

      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(108, 46, 255, 0.2)">

        <div
        ref={containerRef}
        style={{position: 'relative'}}
        >

          <VariableProximity
            label={'Runs Anywhere'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
          />

          <p className='featurePara'>Lightweight React app that loads fast, works on low-end devices, all in you browser.</p>

        </div>

      </SpotlightCard>

      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(108, 46, 255, 0.2)">

        <div
        ref={containerRef}
        style={{position: 'relative'}}
        >

          <VariableProximity
            label={'Privacy First'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
          />

          <p className='featurePara'>No data collection, no login, fully open source. Your edits stay only on your device where they belong</p>

        </div>

      </SpotlightCard>

    </div>

  </>
  )
}

export default App

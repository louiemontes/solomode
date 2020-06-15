import React from 'react';
import useGameState from './state';
import { Button } from '@material-ui/core';
import Layout from '../Layout';
import { countries, continents, connections} from './countries';
import { map } from 'lodash';

function ContLabel (props) {
  const { c } = props;
  const [x, y] = c.label;
  const radius = 20;
  return (<g>
    <path id={`curve${props.cid}`} d={`M ${x - radius - 15} ${y + 10} C ${x - 15} ${y + radius + 25}, ${x + 15} ${y + radius + 25}, ${x + radius + 20} ${y}`} fill="transparent" stroke="transparent" />
    <circle cx={x} cy={y} r={radius} fill={c.color} stroke="black" style={{filter: 'url(#inner)'}} /> 
    <text x={x - 5} y={y + 5} style={{fontSize: '20'}}>{c.bonus}</text>
    <text style={{color: 'red', fontSize: '16px'}} transform={`rotate(-20 ${x} ${y})`}>
      <textPath alignmentBaseline="top" xlinkHref={`#curve${props.cid}`} style={{color: 'red', fontSize: '16px'}}>
        {c.name}
      </textPath>
    </text>
  </g>);
}

function Country (props) {
  const ptsStr = props.c.points.reduce((acc, p) => {
    acc += p.join(',') + ' ';
    return acc;
  }, '');

  // console.log('ptsstr', ptsStr, props.c.name, props.c.center);
  const [x, y] =  props.c.center;
  return (
    <g>
      <polygon
        className="country"
        points={ptsStr}
        transform={`translate(${10}, ${10})`}
        fill={props.c.highlight ? 'red' : props.cont.color}
        stroke={props.c.highlight ? 'red' : 'black'}
        style={{filter: 'url(#inner)'}}
        onMouseOver={() => {
          props.handleOver(props.c);
        }}
      />
      {/* {props.c.points.map((p, idx) => {
        return <text key={idx} x={p[0] + 10} y={p[1] + 10} style={{fontSize: '10'}} stroke="red">{idx + 1}</text>
      })} */}
      <circle cx={x} cy={y} r={12} fill="rgba(0,0,0,0)" stroke="black" 
        onMouseOver={() => {
          props.handleOver(props.c);
        }} />
      {/* <text x={x - 15} y={y + 15} style={{fontSize: '10'}}>{`${x},${y}`}</text> */}
    </g>
  )
}
// console.log(JSON.stringify(countries, null, 2))

export default function Risky () {
  const [game, {startGame, hover}] = useGameState();

  const handleOver = (c) => {
    console.log('over', c);
    hover(c);
  }
  // console.log({countries, continents});
  return (
    <Layout>
      {/* <b>{game.statusMessage}</b> */}
      <div className="TicTacToeSpace" style={{width: '100%'}}>
        <svg viewBox="0 0 1000 800" style={{border: '1px solid grey', width: '100%', backgroundColor: 'lightblue'}}>
          <defs>
            <filter id="shadow">
              <feDropShadow dx="3" dy="4" stdDeviation="0.2"/>
            </filter>
            <filter id="blur">
              <feGaussianBlur stdDeviation="2" />
            </filter>
            <filter id="inner">
              <feFlood floodColor="#111"/>
              <feComposite in2="SourceAlpha" operator="out"/>
              <feGaussianBlur stdDeviation="7" result="blur"/>
              <feComposite operator="atop" in2="SourceGraphic"/>
              <feDropShadow dx="1" dy="1" stdDeviation="3"/>
            </filter>
            <filter id="innersmall">
              <feFlood floodColor="#111"/>
              <feComposite in2="SourceAlpha" operator="out"/>
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feComposite operator="atop" in2="SourceGraphic"/>
              <feDropShadow dx="2" dy="2" stdDeviation="2"/>
            </filter> 
          </defs>
          {connections.map((c, idx) => {
            return <line key={idx} x1={c[0][0]} y1={c[0][1]} x2={c[1][0]} y2={c[1][1]}  fill="black" stroke="black"
            strokeDasharray="4 2" strokeWidth={5} />
          })}
          {countries.map((c) => {
            return <Country c={c} cont={continents[c.continent]} key={c.id} handleOver={handleOver}/> 
          })}
          {map(continents, (c, idx) => {
            return <ContLabel c={c} key={idx} cid={idx}/> 
          })}
          
        </svg>
      </div>
        <Button color="primary" variant="contained" onClick={startGame} disabled={!game.winner} style={{marginTop: "50px", marginBottom: "50px"}}>Start over?</Button>

    </Layout>
  );
  
}

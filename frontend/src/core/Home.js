import React from 'react'
import '../styles.css'
import { API } from '../backend'
import Base from './Base'
export default function Home() {
  console.log('api is',API);
  return (
    <div>
      <Base>
      <h1 className="text-white">hello </h1>
      </Base>
    </div>
  )
}
